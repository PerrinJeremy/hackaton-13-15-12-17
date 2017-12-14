import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    assets: [],
    userassets: [],
    simulation: [],
  },
  actions: {
    LOAD_ASSETS_LIST: function ({ commit }) {
      axios.get('https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/model').then((response) => {
        commit('SET_ASSETS_LIST', { list: response.data });
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
    },
    LOAD_SIMULATION: function ({ commit }, end) {
      axios.get(`https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/2/simulation?start=2017&amp;end=+${end}`).then((response) => {
        commit('SET_SIMULATION', { simul: response.data });
      }, (err) => {
        console.log(err)
      });
    },
    ADD_ASSET: function ({ commit }, asset) {
      axios.post('https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset', asset)
    },
    REMOVE_ASSET: function ({ commit }, id) {
      axios.delete(`https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/${id}`)
    }
  },
  mutations: {
    SET_ASSETS_LIST: (state, { list }) => {
      state.assets = list;
    },
    SET_USER_ASSETS_LIST: (state, { userlist }) => {
      state.userassets = userlist;
      for (let item of state.userassets) {
        item.rate *= 100;
      }
    },
    SET_SIMULATION: (state, { simul }) => {
      state.simulation = simul;
    },
  },
  getters: {

  },
});
export default store
