//desestructuracion de arreglos

const personajes=['Goku', 'Vegeta', 'Trunks'];

const [,,p3]= personajes;
console.log(p3);

const retornaArreglo=()=>{
    return ['ABC', 123];
}

const [p1,p2]= retornaArreglo();

console.log(p1, p2);

//Tarea
//el primer valor del arreglo se llamará nombre y el segundo setNombre
const useState=(valor)=>{
    return [valor, ()=>{console.log('hola mundo')}];
}

const [nombre, setNombre]= useState('Goku');

console.log(nombre);
setNombre();