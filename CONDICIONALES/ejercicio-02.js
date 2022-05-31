/* Pedir el radio de un circulo y calcular su área:
Formula -> A = PI * r^2 */

const radio = Number(prompt("Ingrese un número"));

let area = Math.PI * Math.pow(radio, 2);12
area = area.toFixed(2);
console.log('El área del circulo es de', area);
