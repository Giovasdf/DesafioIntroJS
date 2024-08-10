// let respuesta = prompt("Estas listo para unirte a los Avenger y salvar al mundo? (Si o No)");

// if(respuesta == "Si" || respuesta == "si" || respuesta == "SI" ){
//     alert("Bienvenido al Equipo Avengers, Nos vemos en la Torre Stark");
// }else{
//     alert("Lastima.... si cambias de opinion te estaremos esperando...");
// }

let respuesta = prompt("Estas listo para unirte a los Avenger y salvar al mundo? (Si o No)").toLowerCase();

if(respuesta == "si"){
    alert("Bienvenido al Equipo Avengers, Nos vemos en la Torre Stark");
}else{
    alert("Lastima.... si cambias de opinion te estaremos esperando...");
}