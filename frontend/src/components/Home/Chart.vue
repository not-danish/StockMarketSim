<script>

    import LineChart from "@/components/ui/chart-line/LineChart.vue"

    export default {
        props: [
            'data'
        ],
    };


</script>


<template>
  <LineChart
    index="year"
    class="h-[100px] w-[400px]"
    :data="data"
    :categories="['Export Growth Rate']"
    :y-formatter="(tick, i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"
    :show-tooltip="false"
    :show-grid-line="false"
    :show-legend="false"
    :show-x-axis="false"
    :show-y-axis="false"
  />

</template>