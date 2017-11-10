const num = 10;
const limit = 20;
const operators = ['+', '-'];
const problems = {
  '+': addition,
  '-': subtraction
};

for (var i = 0; i<num; i++) {1
  let p = document.createElement('p');
  p.append(problem());
  document.querySelector('section').appendChild(p);
};

function problem() {
  const operation = operators[Math.floor(Math.random() * operators.length)];
  const solution = Math.floor(Math.random() * limit + 1);
  const [operator1, operator2] = problems[operation](solution);
  return `${operator1} ${operation} ${operator2} = ${solution}`;
}

function addition(solution) {
  const operator1 = Math.floor(Math.random() * solution + 1);
  const operator2 = solution - operator1;
  return [operator1, operator2];
}

function subtraction(solution) {
  const operator1 = Math.floor(Math.random() * limit + 1);
  const operator2 = operator1 - solution;
  return [operator1, operator2];
}
