const i = require('./lib');

describe('subtraction_operator_1', () => {
  it('returns a number >= solution', () => {
    expect(i.subtraction_operator_1(1)).toBeGreaterThanOrEqual(1);
    expect(i.subtraction_operator_1(12)).toBeGreaterThanOrEqual(12);
    expect(i.subtraction_operator_1(19)).toBeGreaterThanOrEqual(19);
  });
});
