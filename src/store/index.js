import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    assets: [],
    userassets: []
  },
  actions: {
    LOAD_ASSETS_LIST: function ({ commit }) {
      axios.get('https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/model').then((response) => {
        commit('SET_ASSETS_LIST', { list: response.data.body });
      }, (err) => {
        console.log(err)
      });
    },
    LOAD_USER_ASSETS_LIST: function ({ commit }) {
      axios.get('https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/2/asset').then((response) => {
        commit('SET_USER_ASSETS_LIST', { userlist: response.data });
      }, (err) => {
        console.log(err)
      });
    }
  },
  mutations: {
    SET_ASSETS_LIST: (state, { list }) => {
      state.assets = JSON.parse(list);
    },
    SET_USER_ASSETS_LIST: (state, { userlist }) => {
      state.userassets = userlist;
    },
  },
  getters: {
    openProjects: (state) => {
      return state.assets.filter(asset => !asset.completed)
    },
  },
});
export default store
