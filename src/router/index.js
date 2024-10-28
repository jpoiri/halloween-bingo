import { createRouter, createWebHistory } from 'vue-router'
import BingoGame from '../views/BingoGame.vue'
import BingoCallout from '../views/BingoCallout.vue';
import GameOver from '../views/GameOver.vue';

const router = createRouter({
  history: createWebHistory('/halloween-bingo/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BingoGame,
    },
    {
      path: '/gameover',
      name: 'gameover',
      component: GameOver,
    },
    {
      path: '/callout',
      name: 'callout',
      component: BingoCallout,
    },
  ],
})

export default router
