import { FormData, UserData } from '../types/types';

/* this functions checks is localstorage available to read or write */

export function isLocalStorageAccessible() {
  if (typeof localStorage === 'object') {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  return false;
}

/* this function takes data from login form and populate localstorage
with loged user object */
export const handleSave = (
  formValues: FormData,
  setIsLoged: (isloged: boolean) => void,
  setLogedUser: (logedUser: UserData) => void
) => {
  if (isLocalStorageAccessible()) {
    const user = {
      name: formValues.name,
      age: formValues.age,
      email: formValues.email,
      pokemons: [],
    };

    localStorage.setItem('pokemonMaster', JSON.stringify(user));
    setIsLoged(true);
    setLogedUser(user);
  }
};

/* pokemon catch function. There is 50% chance to catch pokemon */



export const pokemonCatch=(pokemonId:number): Promise<string>=>{
  return new Promise((resolve) => {
  let user:UserData={};
  
  if (isLocalStorageAccessible()) {
     user = JSON.parse(localStorage.getItem('pokemonMaster')||'{}');
  
  setTimeout(()=>{
    const number=Math.floor(Math.random()*2);
    console.log(number)
    console.log(user.pokemons.length)
    if(number===1 && user && user?.pokemons.length<9){
      user?.pokemons.push(Number(pokemonId))
      localStorage.setItem('pokemonMaster',JSON.stringify(user))
      resolve('catched');

    alert('pokemon catched');
    
    }else{
      resolve('failed');
      alert('catching failed')
  
    }
 
  },3000)

}
})

}