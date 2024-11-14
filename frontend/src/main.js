// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure to import your router instance

createApp(App).use(router).mount('#app');
