import { createApp } from 'vue';
import Maska from 'maska';
import App from './App.vue';
import './firebase';
import router from './router';

const app = createApp(App);
app.use(Maska);
app.use(router);
app.mount('#app');
