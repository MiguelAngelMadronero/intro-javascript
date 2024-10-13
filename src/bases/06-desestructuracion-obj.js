//Desestructuración de objetos o Asignación desestructurante

const persona={
    nombre:'Tony',
    edad:45,
    clave:'Ironman',
    
};


// const {nombre, edad, clave, valor}= persona; //desesctructurar //no importa el orden en el que escribas las propiedades

// console.log(persona);
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext=({clave, edad, rango='Lider'})=>{

    // console.log(nombre, edad, rango)

    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:2323,
            lng:2343,
        },

    }

}

const {nombreClave, anios, latlng:{lat, lng}}=useContext(persona);


console.log(nombreClave, anios, lat, lng)

