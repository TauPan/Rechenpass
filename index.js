const num = 10;
const limit = 20;
const operators = ['+', '-']
const operations = {
  '+': add,
  '-': subtract
}

const inverses = {
  '+': subtract,
  '-': add
}

for (var i = 0; i++; i<num) {1
  const p = document.createElement('p');
  p.innerHTML = problem();
  document.querySelector('body').appendChild(p);
};

function problem() {
  const solution = Math.floor(Math.random() * limit + 1);
  const operation = operators[Math.floor(Math.random() * operators.length)]
  const operator1 = Math.floor(Math.random() * limit + 1);
  const operator2 = inverses[operation](solution, operator1);
  return `${operator1} ${operation} ${operator2} = ${solution}`
}

function add(a1, a2) {
  return a1 + a2;
}

function subtract(s1, s2) {
  return s1 - s2;
}
