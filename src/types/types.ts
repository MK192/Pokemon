export type FormData = {
  name: string;
  age: string;
  email: string;
};

export type UserData = {
  name: string;
  age: string;
  email: string;
  pokemons: PokemonsModal[] |null;
};

export type PokemonResult = {
  name: string;
  url: string;
};
export type Pokemons = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult;
};
export type PokemonsModal={

  id:number;
  name:string;
  timeCatched:string
}
export type SelectedAbility = {
  ability: {
    name: string;
    url: string;
  };
};
