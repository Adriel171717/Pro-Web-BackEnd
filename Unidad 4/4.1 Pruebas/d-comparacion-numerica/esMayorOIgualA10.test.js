const esMayorOIgualA10 = require('./esMayorOIgualA10');

test('El numero debe ser mayor o igual a 10', () => {
  expect(esMayorOIgualA10(10)).toBeGreaterThanOrEqual(10);
});
