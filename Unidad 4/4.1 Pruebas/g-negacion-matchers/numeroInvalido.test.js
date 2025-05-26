const retornarNumero = require('./numeroInvalido');

test('El numero no debe ser igual a 10', () => {
  expect(retornarNumero()).not.toBe(10);
});
