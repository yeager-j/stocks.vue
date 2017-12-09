import Vue from 'vue';
import Vuex from 'vuex';

import * as stocks from './modules/stocks';
import * as portfolio from './modules/portfolio';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
})