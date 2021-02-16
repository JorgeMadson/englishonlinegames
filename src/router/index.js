import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Games from '../views/Games.vue'
// import TicTacToePronunciation from '../components/games/TicTacToePronunciation.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),

  },
  {
    path: '/games',
    name: 'games',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "games" */ '../views/Games.vue'),
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: 'tictactoe', name: 'tictactoe', component: () => import(/* webpackChunkName: "tictactoe" */ '../components//games/TicTacToePronunciation.vue'), },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
