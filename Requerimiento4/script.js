// Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos)
// Se debe considerar lo siguiente:
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor 
// para obtener la parte entera de un número
// decimal.
// Tienen que hacer uso del Modulo %

let dias = parseInt(prompt("Ingrese una cantidad de días"));
//373 dias
let año = Math.floor(dias/365);

let semanas = Math.floor( (dias % 365) / 7 );

let diasRestantes = (dias % 365 ) % 7;

alert(`${dias} Dias son equivalentes a : ${año} Año(s) ${semanas} Semana(s) ${diasRestantes} día(s)`);
