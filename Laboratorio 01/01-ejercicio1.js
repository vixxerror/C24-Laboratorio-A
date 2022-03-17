
/**
// ejercicio 1 solicitado:
*/
function multiple(valor, multiple)
{
    resto = valor % multiple;
    if(resto==0)
        return true;
    else
        return false;
}
// Arrays 
let multiples_7=[];
let multiples_5=[];
let multiples_3=[];
// bucle del 1 al 100
for(let i=1;i<=10000;i++)
{if(multiple(i,7))
        multiples_7.push(i);
    if(multiple(i,5))
     multiples_5.push(i);
     if(multiple(i,3))
     multiples_3.push(i);}
var array = [];
for (var i = 0; i < multiples_7.length; i++) {
    var igual=false;
     for (var j = 0; j < multiples_5.length & !igual; j++) {
         if(multiples_7[i] == multiples_5[j] && 
         multiples_7[i] == multiples_5[j]) 
                 igual=true;
     }
    if(!igual)array.push(multiples_7[i]);
}
var array2 = [];
for (var i = 0; i < multiples_3.length; i++) {
    var igual=false;
     for (var j = 0; j < multiples_3.length & !igual; j++) {
         if(array[i] == multiples_3[j] && 
            array[i] == multiples_3[j]) 
                 igual=true;
     }
    if(!igual)array2.push(array[i]);
}
array2.length = 100
console.log(array2);

