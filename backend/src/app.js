const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 3000;


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

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
  