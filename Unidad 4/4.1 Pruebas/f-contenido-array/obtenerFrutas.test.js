const obtenerFrutas = require('./obtenerFrutas');

test('El array debe contener platano', () => {
  expect(obtenerFrutas()).toContain('platano');
});
