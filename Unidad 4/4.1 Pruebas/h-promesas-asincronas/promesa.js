function obtenerDatos() {
  return new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
      resolve("Datos recibidos");
    } else {
      reject("Error al obtener datos");
    }
  });
}
module.exports = obtenerDatos;
