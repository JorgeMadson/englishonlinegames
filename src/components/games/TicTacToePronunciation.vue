<template>
  <main class="main-game">
    <button
      :onclick="populateBoxes"
      class="button"
    >
      Populate with random words
    </button>
    <button
      :onclick="clearBoxes"
      class="button"
    >
      Clear words
    </button>

    <div class="game-board">
      <div
        class="box"
        v-for="(word, index) in wordsList"
        :key="index"
      >
        <input
          type="text"
          :value="word"
        >
      </div>
    </div>
  </main>
</template>

<script>
const fullList = [
  "Accede",
  "Alias",
  "Anathema",
  "Anemone",
  "Anemone",
  "Antarctic",
  "Boatswain",
  "Brewery",
  "Cache",
  "Camaraderie",
  "Cavalry",
  "Choir",
  "Colonel",
  "Comfortable",
  "Conch",
  "Defibrillator",
  "Deteriorate",
  "Draught",
  "Epitome",
  "Espouse",
  "Espresso",
  "Explicit",
  "Exponentially",
  "Faux",
  "Floccinaucinihilipilification",
  "Ignominious",
  "Isthmus",
  "Knell",
  "Know",
  "Library",
  "Mauve",
  "Mischievous",
  "Nadir",
  "Neophyte",
  "Often",
  "Onamatopeia",
  "Otorhinolaryngologist",
  "Panacea",
  "Penguin",
  "Phenomenon",
  "Phlegmatic",
  "Posthumous",
  "Puerile",
  "Quinoa",
  "Quixotic",
  "Rural",
  "Sanguine",
  "Segue",
  "Sixth",
  "Specific",
  "Squirrel",
  "Staid",
  "Successful",
  "Surfeit",
  "Synecdoche",
  "Temperature",
  "Truculent",
  "Worcestershire",
  "Zephyr"
];
export default {
  data() {
    return {
      wordsList: fullList.slice(0, 9)
    };
  },
  methods: {
    speak(e) {
      if (e.target.value) {
        console.warn(`Vai falar: ${e.target.value}`);
        speak("hi");
      }
    },
    populateBoxes() {
      const shuffled = fullList.sort(() => Math.random() - 0.5);
      this.wordsList = shuffled.slice(0, 9);
    },

    clearBoxes() {
      this.wordsList = this.wordsList.map(() => "");
    }
  }
};
</script>

<style>
/* IPHONE 6/7/8 */
@media (max-height: 667px) {
  .game-board {
    height: 10rem;
  }
}

.game-board {
  width: auto;
  height: 20rem;
  margin: 0 auto;
  color: #fff;
  border: 0.5rem solid #2c3e50;
  border-radius: 1rem;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}

.box {
  border: 0.5rem solid #2c3e50;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
}
</style>