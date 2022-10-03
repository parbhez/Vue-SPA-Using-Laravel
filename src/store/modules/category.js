import axios from "axios";

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
            await axios.get("http://localhost/vue-spa/laravel-app/api/category")
                .then((response) => {
                    commit('getAllCategory', response.data);
                })
                .catch((error) => {
                    console.log(error)
                })

        },



    }








}