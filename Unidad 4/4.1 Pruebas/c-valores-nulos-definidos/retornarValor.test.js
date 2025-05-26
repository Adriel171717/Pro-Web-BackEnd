const retornarValor = require('./retornarValor');

test('Debe estar definido', () => {
  expect(retornarValor()).toBeDefined();
});
