// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StockView from '../views/StockView.vue';


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/stocks', name: 'stocks', component: StockView },
  

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;