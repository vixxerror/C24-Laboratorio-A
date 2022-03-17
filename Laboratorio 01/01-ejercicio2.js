// ejercicio 2 solicitado:


const calcularPresupuesto = (venta_total) => {
    let venta = 1;
    if (venta_total <= 150) {
        venta = 1;
        //cuando se ejecuta un return, este me termina la ejecución de la función
         return ("No tienes comision de venta");
    } else if (venta_total > 150 && venta_total <= 400) {
        venta = 10;
        return (venta_total * venta/100+" es tu comision de venta");
    }
      else if (venta_total > 400) {
          venta = 9
         return (((venta_total * venta/100)+50)+" Es tu comision de venta");
     }
    return venta_total * venta;
};
//parseInt()
//parseFloat()
let vent_tot = +prompt("Ingrese la cantidad de venta:")

// console.log(typeof asistentes);

console.log(calcularPresupuesto(vent_tot));