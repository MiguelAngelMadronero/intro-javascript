// const arreglo= new Array();

const arreglo=[1,2,3,4];


// let arreglo2=arreglo;
// arreglo2.push(5)
//insertar elemento

let arreglo2=[...arreglo, 5];// el operador spread hace una copia de cada elemento del arreglo original, y al nosotros crear un nuevo arreglo manda cada elemento

const arreglo3=arreglo2.map(function(numero){

    return numero*2;

});





console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);