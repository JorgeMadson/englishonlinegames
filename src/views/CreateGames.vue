<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <h1>Create your game, to challenge a friend!</h1>
  <div>
    <fieldset class="direction-column">
      <legend>What is the type of question?</legend>
      <span>
        <input class="input" type="radio" name="question_type" value="qa" id="qa" v-model="question" />
        <label for="qa">Question & Answer</label>
      </span>
      <span>
        <input class="input" type="radio" name="question_type" value="mc" id="multiplechoice" v-model="question" />
        <label for="multiplechoice">Multiple Choice</label>
      </span>
      <button class="button small" @click="addToGame(question)">Add</button>
      <p>Number of questions: {{ game.length }}</p>
    </fieldset>
    <div>
      <p>Here is to show how the game will look like:</p>
      <save-button v-if="game.length > 0"/>
    </div>
      <created-question
        @remove-question="removeFromGame(index)"
        v-for="(question, index) in game" 
        :question="question"
        :key="index"
      />
  </div>
  <router-view />
</template>

<script>
import SaveButton from '../components/createGame/SaveButton.vue'
import CreatedQuestion from '../components/createGame/CreatedQuestion.vue'
export default {
  name: "Games",
  components: {
    CreatedQuestion,
    SaveButton
  },
  data() {
    return {
      game: [],
      question: null,
    };
  },
  methods: {
    addToGame(question) {
      if (question)
        this.game.push(question);
    },
    removeFromGame(index){
      this.game.splice(index,1)
    }
  },
};
</script>

<style scoped>
.small {
  width: 10ch;
}
.direction-column {
  display: flex;
  flex-direction: column;
}
</style>