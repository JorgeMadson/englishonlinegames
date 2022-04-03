import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
  {
    path: '/games/tictactoe', name: 'tictactoe', component: () => import(/* webpackChunkName: "tictactoe" */ '../components//games/TicTacToePronunciation.vue'),
  },
  {
    path: '/games/:game', name: 'game_id', component: () => import(/* webpackChunkName: "game_id" */ '../components//games/GenericGame.vue'),
  },
  {
    path: '/games/', name: 'games', component: () => import(/* webpackChunkName: "games" */'../views/ListGames.vue'),
  },
  {
    path: '/create_games',
    name: 'create_games',
    component: () => import(/* webpackChunkName: "games" */ '../views/CreateGames.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
