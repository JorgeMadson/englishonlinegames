<template>
  <main class="main">
    <card-game title="Pronunciation TicTacToe" />
    <card-game />
    <card-game />
    <card-game />
    <card-game />
    <card-game />
    <home-footer />
  </main>
</template>

<script>
// @ is an alias to /src
import CardGame from '../components/CardGame.vue';
import HomeFooter from '../components/HomeFooter.vue';

export default {
  name: 'Home',
  components: {
    CardGame,
    HomeFooter
  }
}
</script>
