// && возвращает первое ложное значение (или последнее истинное, если все истинны).
// || возвращает первое истинное значение (или последнее ложное, если все ложные).

function outerFunction(outerVariables) {
  function innerFunction(innerVariables) {
    console.log("🚀 ~ outerVariables:", outerVariables);
    console.log("🚀~ innerVariables:", innerVariables);
  }

  return innerFunction;
}
// create closure
const closure = outerFunction("Outer Value");
closure("Inner Value");

function addNumber(a) {
  return function addNumberB(b) {
    console.log(a + b);
    console.log("a", a);
    console.log("b", b);
  };
}

const closureAdd = addNumber(5);
closureAdd(10);
