import { createApp } from 'vue';
import { router } from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Loader.vue';
import App from './App.vue';
const app = createApp(App);
app.use(router);
app.component('app-loader', Loader)
app.mount('#app');
