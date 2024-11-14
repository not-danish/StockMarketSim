// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure to import your router instance
import './assets/main.css'; // Make sure this points to the correct file with Tailwind imports


createApp(App).use(router).mount('#app');
