<template>
  <fieldset>
    <legend>usuário que põe</legend>
    <span>
      <span contenteditable="true" for="gerado-automaticamente">Pergunta</span>
      <input
        type="text"
        required
        aria-describedby="dica"
        name="question-gerada-automaticamente"
        id="gerado-automaticamente"
      />
    </span>
    <span>
      <label for="hint">Hint</label>
      <div id="dica">{dica}</div>
      <input type="text" name="hint" id="hint" placeholder="Hint" aria-describedby="dica"/>
    </span>
  </fieldset>
</template>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
}
</style>