const crearUsuario = require('./crearUsuario');

test('El usuario debe ser igual al esperado', () => {
  expect(crearUsuario('Ana', 25)).toEqual({ nombre: 'Ana', edad: 25 });
});
