<template>
  <gmap-map
      :center="LatLng"
      :zoom="15"
      map-type-id="roadmap"
      style="width: 100%; height: 30vh"
  >
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
        LatLng: state=>state.maps.LatLng
  })
  }
}
</script>

<style lang="scss" scoped>

</style>
