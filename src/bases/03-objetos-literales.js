const persona={
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip: 33333,
        lat: 33334,
        lng: 32.433,
    }



};

const persona2= {...persona};//operador spread es para clonar objetos
persona2.nombre='Peter';

console.log(persona);
console.log(persona2);