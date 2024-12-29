const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios');
const cors = require('cors')
const morgan = require('morgan')
const yahooFinance = require('yahoo-finance2').default;


const PORT = process.env.PORT || 3000;


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Helper functions

async function stockPrice(symbol, interval) {
  try {
    // Calculate the period dynamically
    const currentDate = new Date();
    const endDate = Math.floor(currentDate.getTime() / 1000); // Current time in UNIX timestamp
    let startDate;

    // Determine period1 (start date) based on the interval
    switch (interval) {
      case '1m': // 1-minute interval (60 minutes)
        startDate = endDate - 60 * 5060;
        break;
      case '2m': // 2-minute interval (120 minutes)
        startDate = endDate - 60 * 2 * 60;
        break;
      case '5m': // 5-minute interval (300 minutes)
        startDate = endDate - 60 * 5 * 60;
        break;
      case '15m': // 15-minute interval (900 minutes)
        startDate = endDate - 60 * 15 * 60;
        break;
      case '1h': // 1-hour interval (60 hours)
        startDate = endDate - 60 * 60 * 60;
        break;
      case '1d': // 1-day interval (60 days)
        startDate = endDate - 60 * 24 * 60 * 60;
        break;
      default:
        throw new Error('Unsupported interval');
    }


    const queryOptions = {
      period1: startDate, // Start date as UNIX timestamp
      period2: endDate,   // End date as UNIX timestamp
      interval: interval,
      return: 'array'
    };

    const result = await yahooFinance.chart(symbol, queryOptions);

    console.log(result);
    return result.quotes;

  } catch (error) {
    console.error('Error:', error);
  }
}


async function getAvgVolume(symbol) {
  try {
      yahooFinance.suppressNotices['yahooSurvey'];
      const result = await yahooFinance.quote(symbol);
      return({
          avgVol3Month: result.averageDailyVolume3Month,
          avgVol10Day: result.averageDailyVolume10Day
      });

  } catch (error) {
    console.error('Error:', error);
  }
}



// Backend API to fetch data from Yahoo Finance
app.get('/api/finance', async (req, res) => {
try {
  queries = req.query;
  const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${queries.ticker}`, {
    params: {
      range: '1d',
      interval: '1m',
      region: 'US',
      lang: 'en-US',
    },
  });

  const yahooData = response.data.chart.result[0];
  const volDay = yahooData.indicators.quote[0].volume;
  const avgVol = await getAvgVolume(queries.ticker);
  const priceHistory = await stockPrice(queries.ticker, '1m');

  const transformedData = {
      Symbol: yahooData.meta.symbol,
      Name: yahooData.meta.longName,
      avgVol3Month: avgVol.avgVol3Month,
      avgVol10Day: avgVol.avgVol10Day,
      volToday: yahooData.meta.regularMarketVolume,
      volRatio3Month: yahooData.meta.regularMarketVolume/avgVol.avgVol3Month,
      volRatio10Day: yahooData.meta.regularMarketVolume/avgVol.avgVol10Day,
      price: priceHistory
  }
  // Send the fetched data to the frontend
  res.json(transformedData);
} catch (error) {
  console.error('Error fetching data:', error);
  res.status(500).json({ error: 'Failed to fetch data' });
}
});





app.get('/', (req, res) => {
    res.send('Hello from Node.js backend!');
  });


app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was successfully registered!`
  })
});
  



// API Routes

app.get('/api/test', (req, res) => res.send( {
    message: 'testing!'
}))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  