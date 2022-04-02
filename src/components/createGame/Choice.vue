<template>
  <input
    type="radio"
    name="multiple-choice-1-option-1"
    id="multiple-choice-1"
    v-model="option_text"
  />
  <span for="multiple-choice-1" contenteditable=true>{{ option_text }}</span>
  <button>➕</button>
  <button>❌</button>
  <br/>
</template>

<script setup>
defineProps(["option_text"]);
</script>
