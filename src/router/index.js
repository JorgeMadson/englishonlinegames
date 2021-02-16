import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Test = `<template><h1>teste</h1></template>`;

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
  {
    path: '/games',
    name: 'games',
    component: () => import(/* webpackChunkName: "games" */ '../views/Games.vue'),
    children: [
      { path: '', name: 'games', component: () => import(/* webpackChunkName: "games" */ '../views/Games.vue'), },
      { path: 'tictactoe', name: 'tictactoe', component: () => import(/* webpackChunkName: "tictactoe" */ '../components//games/TicTacToePronunciation.vue'), },
      { path: 'teste', name: 'teste', component: Test },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
