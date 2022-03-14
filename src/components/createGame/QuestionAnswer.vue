<template>
  <div>
    <span>
      <label for="gerado-automaticamente">Pergunta</label>
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
      <input type="text" name="hint" id="hint" placeholder="Hint" />
      <div id="dica">{dica}</div>
    </span>
  </div>
</template>