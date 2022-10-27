import {ApiService} from "@/api/ApiService";
import {createStore} from "vuex";

export const api = new ApiService()

const store = createStore({
    state: {
        serviceList: [],
    },
    getters: {},
    mutations: {
        updateServiceList(state, serviceList) {
            state.serviceList = serviceList || [];
        },
    },
    actions: {
        getServiceList(context) {
            return api.get(`/service/`)
                .then(response => {
                    context.commit('updateServiceList', response.data.services);

                    return response.data;
                });
        },
        getServiceItem(context, id) {
            return api.get(`/service/${id}`)
                .then(response => {
                    return response.data;
                });
        },
        getPortfolioItem(context, id) {
            return api.get(`/portfolio/${id}`)
                .then(response => {
                    return response.data;
                });
        },
    },
    modules: {}
})

export default store;
