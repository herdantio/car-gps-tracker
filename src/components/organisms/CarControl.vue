<template>
  <div>
    <el-row>
      <el-button type="success" v-if="isStopped || isPaused" @click="startAction">Start</el-button>
      <el-button type="primary" v-if="isRunning" @click="pauseAction">Pause</el-button>
      <el-button type="danger" @click="stopAction">Stop</el-button>
    </el-row>
    <el-row>
      <speed-chart></speed-chart>
    </el-row>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "CarControl",
  components: {
    SpeedChart: ()=>import('../molecules/SpeedChart')
  },
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

<style lang="scss" scoped>

</style>
