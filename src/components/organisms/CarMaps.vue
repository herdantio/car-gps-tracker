<template>
  <gmap-map
      :center="center"
      :zoom="15"
      map-type-id="roadmap"
      style="width: 100%; height: 90vh"
  >
    <gmap-polyline v-bind:path.sync="path"></gmap-polyline>
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
        path: state => state.polyLines.LatLng
  })
  }
}
</script>

<style lang="scss" scoped>

</style>
