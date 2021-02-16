<template>
  <main class="main">
    <game-card
      title="Pronunciation TicTacToe"
      path="tictactoe"
      :developed="true"
    />
    <game-card
      title="Ordinal Numbers"
    />
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
