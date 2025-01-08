// && возвращает первое ложное значение (или последнее истинное, если все истинны).
// || возвращает первое истинное значение (или последнее ложное, если все ложные).

function outerFunction(outerVariables) {
  function innerFunction(innerVariables) {
    console.log("🚀 ~ outerVariables:", outerVariables);
    console.log("🚀~ innerVariables:", innerVariables);
  }

  return innerFunction;
}

const closure = outerFunction("Outer Value");
closure("Inner Value");
