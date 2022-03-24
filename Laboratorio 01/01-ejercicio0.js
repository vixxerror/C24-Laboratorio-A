const buscarMayor = (numero1, numero2, numero3) => {
    if (numero1 == numero2 && numero1 == numero3) {
        return("Los tres numeros son iguales y valen: " + numero1)
    } else {
        if (numero1 > numero2) {
            if (numero1 > numero3) {
                return("El primer numero es mayor y vale: " + numero1)
            } 
        } else if (numero2 > numero3) {
            return("El segundo numero es mayor y vale: " + numero2)
        } else {
            return("El tercer numero es mayor y vale: " + numero3)
        }
    }
};

let numero1 = prompt("Ingrese el primer numero: ");
let numero2 = prompt("Ingrese el segundo numero: ");
let numero3 = prompt("Ingrese el tercer numero: ");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

console.log(buscarMayor(numero1, numero2, numero3))