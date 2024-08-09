// Crear un programa que solicite al usuario 5 números 
// y realice los cálculos que se piden
// a continuación. (2 Puntos)
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercer numero"));
let num4 = parseInt(prompt("Ingrese el cuarto numero"));
let num5 = parseInt(prompt("Ingrese el quinto numero"));

let resultadoSuma = num1 + num2 + num3 + num4 + num5;

let resultadoPromedio = resultadoSuma/5;

alert(`El resultado de la suma de los 5 numeros es ${resultadoSuma} y el promedio es ${resultadoPromedio}`);