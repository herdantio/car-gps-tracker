export default {
    namespaced: true,
    state:{
        maps: {
            LatLng: {lat:-6.187180, lng:106.826917}
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
        timer: {},
        path: [
            {lat:-6.193880, lng:106.822902},
            {lat:-6.187004, lng:106.822923},
            {lat:-6.183425, lng:106.822951},
            {lat:-6.182595, lng:106.833463},
            {lat:-6.181646, lng:106.832658},
            {lat:-6.179086, lng:106.831810},
            {lat:-6.176697, lng:106.831070},
        ],
        distance:[
            760,
            400,
            1170,
            140,
            300,
            280
        ]
    },
    actions:{
        startAction({commit, state}){
            commit('startMutation')
            state.timer = setInterval(()=>{
                state.markers.LatLng = {...state.path[state.markers.counter]}
                if(state.markers.counter == state.path.length){
                    commit('stopMutation')
                    clearInterval(state.timer)
                } else {
                    state.markers.counter++
                }
            }, 1000)
        },
        pauseAction({commit, state}){
            commit('pauseMutation')
            clearInterval(state.timer)
        },
        stopAction({commit, state}){
            commit('stopMutation')
            commit('resetMarkerCoordinate')
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
            state.markers.counter = 0
            state.runStatus = 'isStopped'
        },
        resetMarkerCoordinate(state){
            state.markers.LatLng = {...state.path[state.markers.counter]}
        }
    }
}
