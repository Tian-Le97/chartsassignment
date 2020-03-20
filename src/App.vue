<template>
  <div id="app">
    <bar-chart></bar-chart>
    <horizontal-bar-chart></horizontal-bar-chart>
    <bar-chart-grouped></bar-chart-grouped>
    <line-chart></line-chart>
    <pie-chart></pie-chart>
    <doughnut-chart></doughnut-chart>
    <mixed-chart></mixed-chart>
    <bubble-chart></bubble-chart>
    <firebase-data></firebase-data>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import HorizontalBarChart from './components/HorizontalBarChart.vue'
import BarChartGrouped from './components/BarChartGrouped.vue'
import LineChart from './components/LineChart.vue'
import PieChart from './components/PieChart.vue'
import DoughnutChart from './components/DoughnutChart.vue'
import MixedChart from './components/MixedChart.vue'
import BubbleChart from './components/BubbleChart.vue'
import FirebaseData from './components/FirebaseData.vue'
export default {
  name: 'app',
  components: {
    BarChart,
    HorizontalBarChart,
    BarChartGrouped,
    LineChart,
    PieChart,
    DoughnutChart,
    MixedChart,
    BubbleChart,
    FirebaseData
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>