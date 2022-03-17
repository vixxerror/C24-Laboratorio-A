/**
 * Cree una función que reciba un número entero J y un arreglo de enteros, la función debe retornar el arreglo con los enteros desplazados hacia la IZQUIERDA según el entero J.
 *
 * Ej.
 * J = 2
 * arr = [1, 2, 3, 4, 5]
 * RES: [3, 4, 5, 1, 2]
 */



const desplazarIzquierda1 = (j, arreglo) => {
    let tempArr2 = arreglo.splice(0,j);        
    let arra3 = arreglo.concat(tempArr2);  
    return arra3;
};
console.log(desplazarIzquierda1(2, [1, 2, 3, 4, 5]));