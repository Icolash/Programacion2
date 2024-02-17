const readlineSync = require('readline-sync');

let cantidadDeProductos = +readlineSync.question("Ingrese la cantidad de productos que desea agregar: ");
let totalDimensiones = 0;
let totalImpuestos = 0;
let costoTotalFlete = 0;
let promedioCostoProductos = 0;
let productoMayorDimensiones = 0;

for (let i = 1; i <= cantidadDeProductos; i++) {
    var anchoProducto = +readlineSync.question(`Ingrese el ancho del producto ${i} en cm: `);
    var alturaProducto = +readlineSync.question(`Ingrese la altura del producto ${i} en cm: `);
    var profundidadProducto = +readlineSync.question(`Ingrese la profundidad del producto ${i} en cm: `);

    let dimensionesProducto = anchoProducto * alturaProducto * profundidadProducto * 100;
    costoTotalFlete += dimensionesProducto;

    let impuestosProducto = 0;

    if (dimensionesProducto > 10000) {
        impuestosProducto = dimensionesProducto * 0.20;
    } else if (dimensionesProducto > 1000) {
        impuestosProducto = dimensionesProducto * 0.1;
    }

    totalImpuestos += impuestosProducto;

    if (dimensionesProducto > productoMayorDimensiones) {
        productoMayorDimensiones = dimensionesProducto;
    }
}

totalDimensiones = costoTotalFlete + totalImpuestos;
promedioCostoProductos = totalDimensiones / cantidadDeProductos;

console.log(`1. El costo total del flete es: ${totalDimensiones}`);
console.log(`2. El producto de mayores dimensiones es el número: ${productoMayorDimensiones}`);
console.log(`3. El promedio del costo total de los productos es: ${promedioCostoProductos}`);
console.log(`4. La empresa debe pagar un total de ${totalImpuestos} en impuestos.`);
