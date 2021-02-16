<template>
  <main class="main">
    <game-card
      title="Pronunciation TicTacToe"
      path="tictactoe"
    />
    <game-card title="Ordianl Numbers" />
    <game-card />
    <game-card />
    <game-card />
    <home-footer />
  </main>
</template>

<script>
// @ is an alias to /src
import GameCard from "../components/GameCard.vue";
import HomeFooter from "../components/HomeFooter.vue";

export default {
  name: "Home",
  components: {
    GameCard,
    HomeFooter,
  },
};
</script>
