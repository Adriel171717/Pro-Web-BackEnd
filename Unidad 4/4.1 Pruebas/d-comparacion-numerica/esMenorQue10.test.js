const esMenorQue10 = require('./esMenorQue10');

test('El numero debe ser menor que 10', () => {
  expect(esMenorQue10(5)).toBeLessThan(10);
});
