<template>
  <fieldset>
    <legend contenteditable="true" v-bind="question_text">
      Click me do edit
    </legend>
    <div class="container">
      <Choice
        v-for="(answer, index) in choice_list"
        :question="question"
        :key="index"
        option_text="Click to edit"
      />
    </div>
    <SaveButton />
  </fieldset>
</template>
<script setup>
import Choice from "./Choice.vue";
import SaveButton from "./SaveButton.vue";
import { reactive } from "vue";
defineProps(["question_text", "answer_text"]);

const choice_list = reactive(["Answer 1", "Answer 2", "Answer 3", "Answer 4"]);
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>