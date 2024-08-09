let celsius = parseFloat(prompt("Ingrese la temperatura en grados celsius"));

// 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
// es 0 °C + 273.15 = 273.15 K
// ● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
// es (0 °C × 9/5) + 32 = 32 °F

let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9/5)+32;

alert(`Kelvin: ${kelvin} ,Fahrenheit ${fahrenheit}, celsius ${celsius}`);