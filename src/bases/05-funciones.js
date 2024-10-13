//funciones en js

// function saludar(nombre){
//     return `Hola, ${nombre}`
// }

const saludar=(nombre)=>{
    return `Hola ${nombre}`

}

const getUser=()=>({
    uid:'asd',
    username:'ieie',
})

console.log(saludar('Goku'));
console.log(getUser());

//Tarea
//Funcion de flecha con retorno de objeto implicito

const getUsuarioActivo=nombre=>({
    uid:'ABC567',
    username:nombre,
});

const usuarioActivo= getUsuarioActivo('miguel angel');
console.log(usuarioActivo);




