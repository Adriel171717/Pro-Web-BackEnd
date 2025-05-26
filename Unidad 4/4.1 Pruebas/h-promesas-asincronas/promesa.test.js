const obtenerDatos = require('./promesa');

test('La promesa debe resolverse con "Datos recibidos"', () => {
  return expect(obtenerDatos()).resolves.toBe("Datos recibidos");
});

test('La promesa debe rechazar con "Error al obtener datos"', () => {
  return expect(Promise.reject("Error al obtener datos")).rejects.toBe("Error al obtener datos");
});
