/*function resta (a, b){
    return a / b;

}*/

const resta = (a, b)=> {
    return a - b;
}

console.assert(
    resta (2, 5)===3,
    'La resta de 2 menos 5 debe ser -3'
);

console.log('La resta de 2 menos 5 debe ser -3', (2,5));
console.log('------------------------------------');


console.group('Pruebas exhaustivas de resta');

// 1. Normal
console.log('Prueba 1 - Normal (2 - 5):', resta(2, 5));

// 2. Decimal
console.log('Prueba 2 - Decimal (5.5 - 2.2):', resta(5.5, 2.2));

// 3. Frontera
console.log('Prueba 3 - Frontera (0 - 1):', resta(0, 1));

// 4. Frontera (numeros mayores)
console.log('Prueba 4 - Frontera (MAX_SAFE_INTEGER - 1):', resta(Number.MAX_SAFE_INTEGER, 1));

// 5. Fuera de frontera
console.log('Prueba 5 - Fuera de frontera (MAX_SAFE_INTEGER * 10 - 1):', resta(Number.MAX_SAFE_INTEGER * 10, 1));

// 6. Invalido No definido
console.log('Prueba 6 - Inválido (undefined, 5):', resta(undefined, 5));

// 7. Invalido sin argumentos
console.log('Prueba 7 - Inválido sin argumentos:', resta());

// 8. Por tipo nulo
console.log('Prueba 8 - Tipo nulo (null, 2):', resta(null, 2));

// 9. Por tipo cadena
console.log('Prueba 9 - Tipo cadena ("5", "3"):', resta("5", "3"));

// 10. Por negativo
console.log('Prueba 10 - Negativo cero (-0, 3):', resta(-0, 3));

// 11. Ambos negativos
console.log('Prueba 11 - Ambos negativos (-10, -5):', resta(-10, -5));

console.groupEnd();

module.exports = { resta };