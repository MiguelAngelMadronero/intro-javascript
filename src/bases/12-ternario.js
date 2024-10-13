const activo= true;

// let mensaje='';

// if(!activo){
//   mensaje='Activo';
// }else{
//   mensaje='Inactivo';
// }

//!LA MANERA EN QUE TU LO HICISTE
// (!activo) ? mensaje='Activo' : mensaje='Inactivo';

//!LA MANERA DE FERNANDO
// const mensaje=(activo) ? 'Activo' : 'Inactivo';
// const mensaje=(activo) ? 'Activo' : null;
//!MANERA QUE DEBES USAR CUANDO NO TENGAS UN ELSE
// const mensaje=(activo) ? 'Activo' : null;
//!CUANDO NO TENGAS UN ELSE EN REACT ( EN CIERTOS CASO PUEDES USAR ESTE)
const mensaje= activo && 'Activo';


console.log(mensaje);
