<template>
  <div>
    <h1>Car's Speed Chart</h1>
    <line-chart :chart-data="dataCollection" :options="options"></line-chart>
  </div>
</template>

<script>
import LineChart from '../atoms/LineChart'
import {mapState} from 'vuex'

export default {
  name: "SpeedChart",
  data(){
    return {
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Speed (in km/h)'
            }
          }]
        }
      }
    }
  },
  components:{
    LineChart
  },
  computed: {
    ...mapState('CarModule', {
      dataCollection: state => state.chart
    })
  }
}
</script>

<style scoped>

</style>
