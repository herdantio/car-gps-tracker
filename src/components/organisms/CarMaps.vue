<template>
  <gmap-map
      :center="center"
      :zoom="15"
      map-type-id="roadmap"
      style="width: 100%; height: 90vh"
  >
    <gmap-polyline :path.sync="path" :options="options"></gmap-polyline>
    <car-marker></car-marker>
  </gmap-map>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "CarMaps",
  components:{
    CarMarker: ()=>import('../atoms/CarMarker')
  },
  computed:{
    ...mapState('CarModule', {
        center: state=>state.maps.LatLng,
        path: state => state.polyLines.LatLng,
        options: state => state.polyLines.options
  })
  }
}
</script>

<style lang="scss" scoped>

</style>
