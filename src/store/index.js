import Vue from 'vue'
import Vuex from 'vuex'
import hostelDetailOptions from './hostelDetailOptions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hostelDetailOptions
    }
})