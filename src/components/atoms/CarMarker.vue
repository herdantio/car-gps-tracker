<template>
  <GmapMarker
      :position="position"
      :icon="{url: require('../../assets/car-v1.png')}"
  />
</template>

<script>
export default {
  name: "CarMarker",
  props:['position']
}
</script>

<style scoped>

</style>
