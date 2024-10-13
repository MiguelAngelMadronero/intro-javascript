import heroes, {owners}  from "../data/heroes";

// console.log(owners);
export const getHeroById=(id)=>{
  return heroes.find(heroe => heroe.id === id);// find devuelve un solo elemento que debe cumplir la condicion
}

// console.log(getHeroById(2));

export const getHeroesByOwner=(owner)=>{
  return heroes.filter(heroe=> heroe.owner===owner);//filter regresa todos los elementos que cumplen con la condicion
}

// console.log(getHeroesByOwner('DC'))