
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
        chart:{
            labels: [
                '12:10:10',
                '12:10:20',
                '12:10:30',
                '12:10:40',
                '12:10:50',
                '12:11:00'
            ],
            datasets: [{
                label: 'Car\'s Speed',
                data: [
                ],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        distance:[
            72,
            40,
            108,
            15,
            32,
            28
        ]
    },
    actions:{
        startAction({commit, state}){
            commit('startMutation')
            state.timer = setInterval(()=>{
                state.markers.LatLng = {...state.path[state.markers.counter]}
                if(state.markers.counter === state.path.length){
                    commit('stopMutation')
                    clearInterval(state.timer)
                } else {
                    commit('updateChart')
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
            state.chart = {
                labels: [
                    '12:10:10',
                    '12:10:20',
                    '12:10:30',
                    '12:10:40',
                    '12:10:50',
                    '12:11:00'
                ],
                datasets: [{
                    label: 'Car\'s Speed',
                    data: [
                    ],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        },
        updateChart(state){
            state.chart.datasets[0].data.push(state.distance[state.markers.counter])
            state.chart = {
                ...state.chart
            }
        }
    }
}
