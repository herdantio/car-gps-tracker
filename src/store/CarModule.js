export default {
    namespaced: true,
    state:{
        maps: {
            LatLng: {lat:-6.193880, lng:106.822902}
        },
        markers: {
            LatLng: {lat:-6.193880, lng:106.822902},
            counter: 0
        },
        polyLines: {
            LatLng:[
                {lat:-6.193880, lng:106.822902},
                {lat:-6.183425, lng:106.822951},
                {lat:-6.182595, lng:106.833463},
                {lat:-6.181646, lng:106.832658},
                {lat:-6.179086, lng:106.831810},
                {lat:-6.176697, lng:106.831070},
            ],
            options:{
                strokeColor:'#008000'
            }
        },
        runStatus: 'isStopped',
        timer: {}
    },
    actions:{
        startAction({commit, state}){
            commit('startMutation')
            state.timer = setInterval(()=>{
                state.markers.LatLng = {...state.polyLines.LatLng[state.markers.counter]}
                if(state.markers.counter == state.polyLines.LatLng.length){
                    clearInterval(state.timer)
                    state.markers.counter = 0
                    commit('stopMutation')
                } else {
                    state.markers.counter++
                }
            }, 2000)
        },
        pauseAction({commit, state}){
            commit('pauseMutation')
            clearInterval(state.timer)
        },
        stopAction({commit, state}){
            commit('stopMutation')
            clearInterval(state.timer)
        }
    },
    mutations:{
        startMutation(state){
            state.runStatus = 'isRunning'
        },
        pauseMutation(state){
            state.runStatus = 'isPaused'
        },
        stopMutation(state){
            state.runStatus = 'isStopped'
        }
    }
}
