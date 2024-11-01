import { createRouter, createWebHashHistory } from 'vue-router'
import Game from '../views/Game.vue'
import Callout from '../views/Callout.vue';
import Bingo from '../views/Bingo.vue';

const router = createRouter({
  history: createWebHashHistory('/halloween-bingo/'),
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game,
    },
    {
      path: '/bingo',
      name: 'bingo',
      component: Bingo,
    },
    {
      path: '/callout',
      name: 'callout',
      component: Callout,
    },
  ],
})

export default router
