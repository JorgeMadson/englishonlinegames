<template>
  <fieldset>
    <legend contenteditable="true" v-bind="question_text">
      Click me do edit
    </legend>
    <div class="container">
      <choice v-for="(answer, index) in choice_list" :key="index" :option_text="answer"/>
    </div>
    <div class="to-the-left">
    <button @click="$emit('remove-question')" class="button small">❌</button>
    </div>
  </fieldset>
</template>
<script setup>
import Choice from "./Choice.vue";
import { reactive } from "vue";
defineProps(["question_text", "answer_text"]);

const choice_list = reactive(["Answer 1", "Answer 2", "Answer 3", "Answer 4"]);
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.to-the-left {
  display: grid;
  justify-items: end;
}
</style>