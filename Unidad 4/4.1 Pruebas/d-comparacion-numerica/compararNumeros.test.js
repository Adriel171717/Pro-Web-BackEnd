const esMayorQue10 = require('./compararNumeros');

test('El número debe ser mayor que 10', () => {
  expect(esMayorQue10(15)).toBeGreaterThan(10);
});
