<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <main class="main">
    <game-card
      title="Pronunciation TicTacToe"
      path="tictactoe"
      :developed="true"
    />
    <home-footer />
  </main>
  <section
    class="comments"
    aria-labelledby="comment"
  >
    <h2 id="comment">
      Comments
    </h2>
    <Disqus shortname="englishonlinegames" />
  </section>
</template>

<script>
// @ is an alias to /src
import GameCard from "../components/GameCard.vue";
import { Disqus } from "vue-disqus";
import HomeFooter from "../components/HomeFooter.vue";

export default {
  name: "Home",
  components: {
    GameCard,
    Disqus,
    HomeFooter,
  },
};
</script>
<style>
.comments {
  margin: 5rem;
}
@media screen and (max-width: 481px) {
  .comments {
    margin: 2rem;
  }
}
</style>
