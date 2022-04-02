<template>
  <fieldset>
      <legend contenteditable="true" v-bind="question_text">Click me to edit</legend>
    <span>
      <input type="text" name="hint" id="hint" placeholder="Answer" aria-describedby="dica" v-bind="answer_text"/>
    </span>
  </fieldset>
</template>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
}
</style>
<script setup>
defineProps(["question_text:'oi'", "answer_text"]);

</script>