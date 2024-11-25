<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

import OrderBook from "@/components/OrderBook.vue";
import StockChart from "@/components/StockChart.vue";
import TradeCard from "@/components/TradeCard.vue";
import LineChart from "@/components/ui/chart-line/LineChart.vue"


export default {
  components: {
    OrderBook,
    StockChart,
    TradeCard,
    LineChart
  },
  setup() {
    const route = useRoute();
    const stock = route.params.stock;

    const stockData = ref(null); // Holds fetched data
    const loading = ref(true); // Tracks loading state

    const priceData = ref(null);

    // Fetch stock data
    axios
      .get(`http://localhost:3000/api/finance?ticker=${stock}`)
      .then((response) => {
        stockData.value = response.data;
        priceData.value = stockData.value.price;
      })
      .catch((error) => {
        console.error("Error fetching stock data:", error);
      })
      .finally(() => {
        loading.value = false; // Mark loading as complete
      });

    return {
      stock,
      stockData,
      loading,
      priceData
    };
  },
};
</script>

<template>
  <div class="flex flex-wrap justify-between items-center gap-4 lg:flex-nowrap">
        <OrderBook class="lg:max-h-[calc(100vh-350px)] lg:min-h-[550px] xl:h-[650px]"/>
            <StockChart class="w-3/5 lg:max-h-[calc(100vh-350px)] lg:min-h-[550px] xl:h-[650px]" :loading="loading">
                <div class="flex justify-between">
                    <span class="text-4xl text-slate-100 text-left">{{stockData.Symbol}}<br></span>
                    <div class="text-right relative text-green-500">
                        <span class="text-4xl">${{stockData.price[stockData.price.length - 1].close}}</span>
                        <span class="text-md">+{{ ((stockData.price[stockData.price.length - 1].close - stockData.price[0].close)/(stockData.price[stockData.price.length - 1].close)*100).toFixed(2)}}%</span>
                    
                    </div>
                </div>

                <div class="text-md">{{stockData.Name}}</div>

                <LineChart
                    index="date"
                    class="pt-25 "
                    :data="priceData"
                    :categories="['close']"
                    :colors="['#E2E8F0', '#CBD5E1']"
                    :showLegend="true"
                    :showTooltip="true"
                    :showGridLine="false"
                    :showYAxis="true"

                />
            </StockChart>
        <TradeCard class="lg:max-h-[calc(100vh-350px)] lg:min-h-[550px]" :stock="stock"/>
    </div>
</template>
