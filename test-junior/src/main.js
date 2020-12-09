import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import vuetify from './plugins/vuetify';
import Multiselect from 'vue-multiselect';

import "./assets/scss/style.scss";

Vue.config.productionTip = true;

Vue.use(Vuelidate, Multiselect, vuetify);

new Vue({
  render: h => h(App)
}).$mount('#app');
