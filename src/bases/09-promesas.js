import { getHeroById } from "./08-imp-exp";




// const promesa= new Promise((resolve,reject)=>{
//    setTimeout(() => {

    // const heroe= getHeroById(2);
    // console.log(heroe);
    // console.log('2 segundos despues');
//     resolve(heroe);// le transferimos como argumento al then mediante el resolve la constante heroes
    
    // reject('No se pudo encontrar el heroe');//El reject le manda la informacion que queremos que tenga el error
//    }, 2000);

// });// Al colocar el resolve estas llamando al then, apenas se cumpla la promesa con el resolve se ejecuta lo que está en el then

// promesa.then((heroe)=>{
//   console.log('heroe:', heroe)
// })
// .catch(err=>console.warn(err));

const getHeroeByIdAsync= (id)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
  
     const heroe= getHeroById(id);
     if(!heroe){
      reject('No se pudo encontrar el heroe');
     }
     
     // console.log(heroe);
     // console.log('2 segundos despues');
     resolve(heroe);// le transferimos como argumento al then mediante el resolve la constante heroes
     
     //El reject le manda la informacion que queremos que tenga el error
    }, 2000);
  
  });// Al colocar el resolve estas llamando al then, apenas se cumpla la promesa con el resolve se ejecuta lo que está en el then
  
  

}

getHeroeByIdAsync(2)
      .then(heroe=> console.log('Heroe:', heroe))//! forma resumida del .then( console.log)
      .catch(err=> console.warn(err))//!forma resumida de hacer el catch .catch(console.warn)


