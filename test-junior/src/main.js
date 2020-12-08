import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify';

import "./assets/scss/style.scss";

Vue.config.productionTip = true

Vue.use(Vuelidate)

new Vue({
  vuetify,
  Vuelidate,
  render: h => h(App)
}).$mount('#app')
