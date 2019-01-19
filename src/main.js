import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Vue configuration
Vue.config.productionTip = false

// Axios configuration
axios.defaults.baseURL = '/api/v1';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['Accept'] = 'application/json';

// Initiate a vue instance
new Vue({ render: h => h(App), router }).$mount('#app')
