const num = 10;
const limit = 20;
const operators = ['+', '-'];
const problems = {
  '+': addition,
  '-': subtraction
};

for (var i = 1; i <= num; i++) {
  let p = document.createElement('p');
  p.append(`${i}: `);
  p.append(problemtext());
  document.querySelector('section').appendChild(p);
};

function problemtext() {
  const [operator1, operation, operator2, solution] = problem();
  return `${operator1} ${operation} ${operator2} = ${solution}`;
}

function problem() {
  const operation = operators[Math.floor(Math.random() * operators.length)];
  const solution = Math.floor(Math.random() * limit + 1);
  const [operator1, operator2] = problems[operation](solution);
  return [operator1, operation, operator2, solution];
}

function addition(solution) {
  const operator1 = addition_operator_1(solution);
  const operator2 = solution - operator1;
  return [operator1, operator2];
}

function addition_operator_1(solution) {
  return Math.floor(Math.random() * (solution - 1) + 1);
}

function subtraction(solution) {
  const operator1 = subtraction_operator_1(solution);
  const operator2 = operator1 - solution;
  return [operator1, operator2];
}

function subtraction_operator_1(solution) {
  return Math.floor(Math.random()
                    * (limit - solution)
                    + solution + 1);
}
