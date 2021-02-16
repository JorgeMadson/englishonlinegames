<template>
  <article>
    <h1>{{ title }}</h1>
    <router-link
      class="button"
      :to="{name: this.path }"
    >
      Play
    </router-link>
  </article>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    title: { type: String, default: "games" },
    path: { type: String, default: "games" },
  },
};
</script>