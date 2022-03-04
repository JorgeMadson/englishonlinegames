<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <h1>Create your game, to challenge a friend!</h1>
  <div class="container">
    <fieldset>
      <legend>What is the time of question?</legend>
      <input type="radio" name="question_type" value="qa" v-model="question" />Question & Answer<br>
      <input type="radio" name="question_type" value="puzzle" v-model="question" />Puzzle<br>
      <input type="radio" name="question_type" value="multiplechoice" v-model="question" />Multiple Choice<br>
      <button @click="addToGame(question)">Add</button>
    </fieldset>
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
  <div>
      <code>{{question}}</code>
      <code>{{game}}</code>
    </div>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "Games",
  components: {},
   data() {
    return {
      game: [],
      question: null
    }
  },
  methods: {
    addToGame(question) {
      this.game.push(question);
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  
}
</style>