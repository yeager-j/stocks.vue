const namespaced = true;

const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    buy(state, { stockID, quantity, price }) {
        const record = state.stocks.find(element => element.id === stockID);

        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockID,
                quantity: quantity
            });
        }

        state.funds -= price * quantity;

        console.log(quantity);
        console.log(price);

        console.log(state.funds);
    },
    sell(state, { stockID, quantity, price }) {
        const record = state.stocks.find(element => element.id === stockID);

        let recordQuantity = record.quantity;

        let result = recordQuantity > quantity;

        console.log(`The result of record.quantity > quantity is ${result}. record.quantity is ${recordQuantity} and record is ${quantity}.`);

        if (result) {
            console.log('ay');
            record.quantity -= quantity;
        } else {
            console.log('bye');
            console.log(recordQuantity);
            console.log(quantity);
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.funds += price * quantity;
    }
};

const actions = {
    sell({ commit }, payload) {
        commit('sell', payload);
    }
};

const getters = {
    stockPortfolio(state, getters, rootState, rootGetters) {
        return state.stocks.map(stock => {
            console.log(getters);

            const record = rootGetters['stocks/stocks'].find(element => element.id === stock.id);

            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
};

export { state, mutations, actions, getters, namespaced }
