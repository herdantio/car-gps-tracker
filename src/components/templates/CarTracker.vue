<template>
  <el-container>
    <car-maps></car-maps>
  </el-container>
</template>

<script>
export default {
  name: "CarTracker",
  components:{
    CarMaps: ()=>import('../organisms/CarMaps')
  }
}
</script>

<style scoped>

</style>
