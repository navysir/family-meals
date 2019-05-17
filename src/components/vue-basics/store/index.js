import Vue from 'vue';
import Vuex from 'vuex';

import money from './moduls/a';
import count from './moduls/b';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        money,
        count
    }
})
