import axios from "axios";
import mixin from '../../mixin'

export default {

    namespaced: true,

    state: {
        categories: [],
    },

    getters: {

    },

    mutations: {
        getAllCategory(state, data) {
            state.categories = data;
        },

    },

    actions: {
        async get_category({ commit }) {
            window.$eventBus.emit('loading-status', true);
            await axios.get("/category")
                .then((response) => {
                    commit('getAllCategory', response.data);
                    window.$eventBus.emit('loading-status', false);
                })
                .catch((error) => {

                    window.$eventBus.emit('loading-status', false);
                    console.log(error)
                })
        },
    }








}