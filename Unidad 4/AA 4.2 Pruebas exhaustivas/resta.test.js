
const { resta } = require('./Pruebas exhaustivas');

describe('Pruebas exhaustivas de resta', () => {
    test('1. Normal', () => {
        expect(resta(2, 5)).toBe(-3);
    });

    test('2. Decimal', () => {
        expect(resta(5.5, 2.2)).toBeCloseTo(3.3);
    });

    test('3. Frontera', () => {
        expect(resta(0, 1)).toBe(-1);
    });

    test('4. Frontera - números grandes', () => {
        expect(resta(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });

    test('5. Fuera de frontera', () => {
        expect(resta(Number.MAX_SAFE_INTEGER * 10, 1)).toBe(Number.MAX_SAFE_INTEGER * 10 - 1);
    });

    test('6. Inválido - undefined', () => {
        expect(resta(undefined, 5)).toBeNaN();
    });

    test('7. Inválido - sin argumentos', () => {
        expect(resta()).toBeNaN();
    });

    test('8. Tipo nulo', () => {
        expect(resta(null, 2)).toBe(-2);
    });

    test('9. Tipo cadena', () => {
        expect(resta("5", "3")).toBe(2); // JS convierte a número
    });

    test('10. Negativo cero', () => {
        expect(resta(-0, 3)).toBe(-3);
    });

    test('11. Ambos negativos', () => {
        expect(resta(-10, -5)).toBe(-5);
    });
});
