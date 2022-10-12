import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VueAgile from 'vue-agile'
import './styles/index.scss';

createApp(App)
    .use(router)
    .use(VueAgile)
    .mount('#app')
