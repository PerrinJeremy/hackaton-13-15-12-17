// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuetify from 'vuetify';
import App from './App';
import * as THREE from 'three';
var CSS3DRenderer = require('three-renderer-css3d');
var CSS3DObject = require('three-renderer-css3d');

Vue.use(THREE);
Vue.use(ElementUI);
Vue.use(Vuetify);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App },
  render: h => h(App),
});
