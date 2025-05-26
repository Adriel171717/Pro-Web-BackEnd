const obtenerMensaje = require('./buscarPalabra');

test('Debe contener la palabra Jest', () => {
  expect(obtenerMensaje()).toMatch(/Jest/);
});
