import "shitajicss/docs/css/shitaji.min.css";
import "./scss/style.scss";
import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
