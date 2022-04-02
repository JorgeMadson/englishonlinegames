<template>
  <fieldset>
    <legend contenteditable="true" v-bind="question_text">Click me do edit</legend>
    <div>
      <Choice option_text="Click to edit" />
    </div>
  </fieldset>
</template>
<script setup>
import Choice from "./Choice.vue";
defineProps(["question_text", "answer_text"]);
</script>