import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import LandingLayoutVue from './layout/LandingLayout.vue';
 import ProfileLayoutVue from './layout/ProfileLayout.vue';

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.component('landing-layout',LandingLayoutVue);
app.component('profile-layout',ProfileLayoutVue);

app.mount('#app');