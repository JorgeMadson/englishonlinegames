<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <h1>Create your game, to challenge a friend!</h1>
  <div class="container">
  <form method="get" action="/games">
    <fieldset>
      <legend>What is the time of question?</legend>
      <input type="radio" name="question_type" value="qa" />Question & Answer<br>
      <input type="radio" name="question_type" value="puzzle" />Puzzle<br>
      <input type="radio" name="question_type" value="multiplechoice" />Multiple Choice<br>
      <br />
      <input type="submit" value="Add" />
    </fieldset>
  </form>
  <div>
    <p>Here is to show how the game will look like:</p>
    <form action="">
      <fieldset>
      <label for="question">Question</label> <br>
      <input type="text" name="answer" id="" placeholder="Answer">
      </fieldset>
      <fieldset>
      <label for="question">Question</label> <br>
      <input type="text" name="answer" id="" placeholder="Answer">
      </fieldset>
    </form>

  </div>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "Games",
  components: {},
};
</script>

<style scoped>
.container {
  display: flex;
  
}
</style>