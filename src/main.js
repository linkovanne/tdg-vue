import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss';

import 'vue-fullpage.js/dist/style.css'
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

createApp(App)
    .use(router)
    .use(VueFullPage)
    .mount('#app')
