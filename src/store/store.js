import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		increment(state){
			state.count++;
		}
	},
	getters:{
		my_func:function(state){
			return state.count * 2
		},
		my_func_count:function(state,getters){
			return getters.my_func
		}
	}
})