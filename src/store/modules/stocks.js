import { stocks } from '../../data/stocks';

const namespaced = true;

const state = {
    stocks: []
};

const mutations = {
    set(state, stocks) {
        state.stocks = stocks;
    },
    randomize(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (Math.random() + 0.6));
        });
    }
};

const actions = {
    buy({ commit }, payload) {
        commit('portfolio/buy', payload, { root: true });
    },
    init({ commit }) {
        commit('set', stocks)
    },
    randomize({ commit }) {
        commit('randomize');
    }
};

const getters = {
    stocks(state) {
        return state.stocks;
    }
};

export { state, mutations, actions, getters, namespaced }
