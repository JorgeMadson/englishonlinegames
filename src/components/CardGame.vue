<template>
  <article>
    <h1>{{ title }}</h1>
    <a
      class="button"
      href="/games/tictactoe.html"
    >Play</a>
  </article>
</template>

<script>
export default {
  name: "CardGame",
  props: {
    title: { type: String, default: "Game" },
  },
};
</script>