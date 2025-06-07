
const isPasswordValid = require('./passwordWeak'); //'./passwordStrong' o './passwordWeak' para las funciones

describe("Pruebas para funcion de Password validos", () => {

  test("1. Caso normal: Jaguar2025@", () => {
    expect(isPasswordValid("Jaguar2025@")).toBe(true);
  });

  test("2. Vacio: ''", () => {
    expect(isPasswordValid("")).toBe(false);
  });

  test("3. Muy corto: 'A@1'", () => {
    expect(isPasswordValid("A@1")).toBe(false);
  });

  test("4. Sin mayuscula: 'jaguar2017@'", () => {
    expect(isPasswordValid("jaguar2017@")).toBe(false);
  });

  test("5. Sin numero: 'Jaguar@secure'", () => {
    expect(isPasswordValid("Jaguar@secure")).toBe(false);
  });

  test("6. Sin minuscula: 'JAGUAR2025@'", () => {
    expect(isPasswordValid("JAGUAR2025@")).toBe(false);
  });

  test("7. Sin caracter especial: 'Jaguar2017'", () => {
    expect(isPasswordValid("Jaguar2017")).toBe(false);
  });

  test("8. Con espacios: 'Jaguar 2025@'", () => {
    expect(isPasswordValid("Jaguar 2025@")).toBe(false);
  });

  test("9. Con palabra significativa: 'Tito2017@'", () => {
    expect(isPasswordValid("Tito2017@")).toBe(true);
  });

  test("10. Tipo no string: 12345678", () => {
    expect(isPasswordValid(12345678)).toBe(false);
  });
});
