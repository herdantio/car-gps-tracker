<template>
  <div>
    <line-chart :chart-data="dataCollection"></line-chart>
  </div>
</template>

<script>
import LineChart from '../atoms/LineChart'
import {mapState} from 'vuex'

export default {
  name: "SpeedChart",
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
