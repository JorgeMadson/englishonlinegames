<template>
  <main class="main-game">
    <button
      onclick="populateBoxes()"
      class="button"
    >
      Populate with random words
    </button>
    <button
      onclick="clearBoxes()"
      class="button"
    >
      Clear all words
    </button>

    <div class="game-board">
      <div class="box">
        <input type="text">
      </div>
      <div class="box">
        <input type="text">
      </div>
      <div class="box">
        <input type="text">
      </div>
      <div class="box">
        <input type="text">
      </div>
      <div class="box">
        <input type="text">
      </div>
      <div class="box">
        <input type="text">
      </div>
      <div class="box">
        <input type="text">
      </div>
      <div class="box">
        <input type="text">
      </div>
      <div class="box">
        <input type="text">
      </div>
    </div>
  </main>
</template>
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