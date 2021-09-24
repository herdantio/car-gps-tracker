<template>
  <div>
    <car-tracker></car-tracker>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    CarTracker: ()=>import('./components/templates/CarTracker')
  }
}
</script>

<style lang="scss">

</style>
