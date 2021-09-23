<template>
  <GmapMarker
      :position="position"
      :icon="{url: 'https://img.icons8.com/material-outlined/24/000000/car--v1.png'}"
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
