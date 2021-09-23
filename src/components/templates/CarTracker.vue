<template>
    <el-row>
      <el-col :span="16">
        <car-maps></car-maps>
      </el-col>
      <el-col :span="8">
        <car-control></car-control>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "CarTracker",
  components:{
    CarMaps: ()=>import('../organisms/CarMaps'),
    CarControl: ()=>import('../organisms/CarControl')
  }
}
</script>

<style scoped>

</style>
