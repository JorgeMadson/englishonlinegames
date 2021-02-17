<template>
  <article :class="{in_development: !developed}">
    <h1>{{ title }}</h1>
    <router-link
      v-if="developed"
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
    title: { type: String, default: "In development" },
    path: { type: String, default: "home" },
    developed: { type: Boolean, default: false}
  },
};
</script>