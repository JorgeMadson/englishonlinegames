<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <h1>Create your game, to challenge a friend!</h1>
  <div class="container">
    <fieldset class="direction-column">
      <legend>What is the type of question?</legend>
      <span>
        <input type="radio" name="question_type" value="qa" id="qa" v-model="question" />
        <label for="qa">Question & Answer</label>
      </span>
      <span>
        <input type="radio" name="question_type" value="puzzle" id="puzzle" v-model="question" />
        <label for="puzzle">Puzzle</label>
      </span>
      <span>
        <input type="radio" name="question_type" value="mc" id="multiplechoice" v-model="question" />
        <label for="multiplechoice">Multiple Choice</label>
      </span>
      <button @click="addToGame(question)">Add</button>
      <p>Number of questions: {{ game.length }}</p>
    </fieldset>
    <div>
      <p>Here is to show how the game will look like:</p>
      <created-question
        v-for="(question, index) in game" 
        :question="question"
        :key="index"
      />
    </div>
  </div>
  <router-view />
</template>

<script>
import CreatedQuestion from '../components/createGame/CreatedQuestion.vue'
export default {
  name: "Games",
  components: {
    CreatedQuestion
  },
  data() {
    return {
      game: [],
      question: null,
    };
  },
  methods: {
    addToGame(question) {
      this.game.push(question);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.direction-column {
  display: flex;
  flex-direction: column;
}
</style>