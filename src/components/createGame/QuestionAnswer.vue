<template>
  <fieldset>
    <legend contenteditable="true" role="textbox"  v-bind="question_text" aria-roledescription="question text">
      Question click me to edit
    </legend>
    <span>
      <input type="text" name="hint" id="hint" placeholder="Answer" aria-roledescription="question answer" v-bind="answer_text"/>
    </span>
    <save-button/>
  </fieldset>
</template>

<script setup>
import SaveButton from "./SaveButton.vue"

defineProps(["question_text", "answer_text"]);
function greet(obj) {
  // `this` inside methods points to the current active instance
  alert(`Hello ${obj.name}!`);
  console.log(this);
}
</script>

<style scoped>
fieldset {
  display: flex;
  justify-content: space-between;
}
input {
width: 75vw;
}
</style>