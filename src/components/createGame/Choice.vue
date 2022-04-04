<template>
<span>
    <span>
      <input type="radio" name="multiple-choice-1-option-1" id="multiple-choice-1" v-model="option_text"/>
      <span for="multiple-choice-1" contenteditable="true">{{option_text}}</span>
    </span>
</span>
</template>

<script setup>
defineProps(["option_text", "answerList"]);
</script>
<style scoped>

</style>