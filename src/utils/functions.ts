import { FormData, UserData ,PokemonsModal} from '../types/types';
import { format } from 'date-fns';
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
      pokemons:[],
    };

    localStorage.setItem('pokemonMaster', JSON.stringify(user));
    setIsLoged(true);
    setLogedUser(user);
  }
};

/* pokemon catch function. There is 50% chance to catch pokemon */



export const pokemonCatch=(selectedPokemon:string,pokemonId:number): Promise<string>=>{
  return new Promise((resolve) => {
  let user:UserData;
  
  if (isLocalStorageAccessible()) {
     user = JSON.parse(localStorage.getItem('pokemonMaster')||'{}');
  
  setTimeout(()=>{
    const number=Math.floor(Math.random()*2);
    console.log(number)
    console.log(user.pokemons.length)
    if(number===1 && user && user?.pokemons.length<9){
      const poki:PokemonsModal={
        id:Number(pokemonId),
        name:selectedPokemon,
        timeCatched:format(Date.now(), 'dd MMM yy, H:mm:ss')
      }
      user?.pokemons.push(poki)
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

/* function for removing single pokemon from logged user collection*/

export const removePokemon=(id:number)=>{
  let user:UserData;
  
  if (isLocalStorageAccessible()) {
     user = JSON.parse(localStorage.getItem('pokemonMaster')||'{}');


     user.pokemons=user.pokemons.filter((pokemon)=>pokemon.id!==id);

     localStorage.setItem('pokemonMaster',JSON.stringify(user));

     return user;
}

}


/* this function should release all pokemons from user storage. */


export const relaseAllPokemons=()=>{
  let user:UserData;
  
  if (isLocalStorageAccessible()) {
     user = JSON.parse(localStorage.getItem('pokemonMaster')||'{}');
    user.pokemons=[];
    localStorage.setItem('pokemonMaster',JSON.stringify(user));
    return user;
  }
  
}

 /*this function change first letter of string to be be upper case */
export const capitalizeFirstLetter=(str:string)=> {
  if (str?.length === 0) {
      return str; 
  }

  str=str[0].toUpperCase()+str.slice(1);
  return str

}


/*this function should return correct value for message and nameOfClass.
Depending on catchedPokemonNumber, catchMessage values, className for div
and right message should be displayed */

export const previewMessage=(catchedPokemonNumber: UserData | null, catchMessage?:string)=>{

  let message = '';
  let nameOfClass = '';
  if (
      catchedPokemonNumber?.pokemons &&
      catchedPokemonNumber.pokemons.length >= 9
  ) {
      message = 'Poke Storage full!';
      nameOfClass = 'capacity-full';
  } else if (
      catchedPokemonNumber?.pokemons &&
      catchedPokemonNumber.pokemons.length < 9 &&
      catchMessage === 'catched'
  ) {
      message = 'catched';
      nameOfClass = 'catched';
  } else if (
      catchedPokemonNumber?.pokemons &&
      catchedPokemonNumber.pokemons.length < 9&&
      catchMessage === 'failed'
  ) {
      message = 'catching failed, try again';
      nameOfClass = 'failed';
  }

  return {message,nameOfClass}
}