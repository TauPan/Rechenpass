const num = 10;
const limit = 20;
const operators = ['+', '-'];
const problems = {
  '+': addition,
  '-': subtraction
};

module.exports.main = function () {
  for (var i = 1; i <= num; i++) {
    let h = document.createElement('h3');
    h.innerHTML = `${i}:`;
    document.querySelector('section').appendChild(h);
    let p = document.createElement('p');
    p.innerHTML = problemtext();
    document.querySelector('section').appendChild(p);
  };
}

module.exports.problemtext = function() {
  const [operator1, operation, operator2, solution] = problem();
  return `${operator1} ${operation} ${operator2} = ${solution}`;
}

module.exports.problem = function () {
  const operation = operators[Math.floor(Math.random() * operators.length)];
  const [operator1, operator2, solution] = problems[operation]();
  return [operator1, operation, operator2, solution];
}

function addition () {
  const solution = Math.floor(Math.random() * (limit - 1) + 2);
  const operator1 = addition_operator_1(solution);
  const operator2 = solution - operator1;
  return [operator1, operator2, solution];
}

module.exports.addition = addition;

module.exports.addition_operator_1 = function (solution) {
  return Math.floor(Math.random() * (solution - 1) + 1);
}

function subtraction () {
  const solution = Math.floor(Math.random() * limit);
  const operator1 = subtraction_operator_1(solution);
  const operator2 = operator1 - solution;
  return [operator1, operator2, solution];
}

module.exports.subtraction = subtraction;

module.exports.subtraction_operator_1 = function (solution) {
  return Math.floor(Math.random()
                    * (limit - solution)
                    + solution + 1);
}
