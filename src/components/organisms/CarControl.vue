<template>
  <el-container>
    <el-row>
      <el-button type="success" v-show="isStopped || isPaused" @click="startAction">Start</el-button>
      <el-button type="primary" v-show="isRunning" @click="pauseAction">Pause</el-button>
      <el-button type="danger" @click="stopAction">Stop</el-button>
    </el-row>
    <el-row></el-row>
  </el-container>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "CarControl",
  computed: {
    ...mapState('CarModule', {
      isRunning: state => (state.runStatus == 'isRunning'),
      isStopped: state => (state.runStatus == 'isStopped'),
      isPaused: state => (state.runStatus == 'isPaused')
    })
  },
  methods:{
    ...mapActions('CarModule', [
        'startAction',
        'pauseAction',
        'stopAction'
    ])
  }
}
</script>

<style scoped>

</style>
