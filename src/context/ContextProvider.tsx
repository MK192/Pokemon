import { createContext, useContext, useState } from 'react';
import { isLocalStorageAccessible } from '../utils/functions';
import { UserData } from '../types/types';

// user data context
interface UserDataContext {
  logedUser: null | UserData;
  setLogedUser: (changeUserData: UserData) => void;
}

const UserDataContext = createContext<UserDataContext>({
  logedUser: JSON.parse(localStorage.getItem('pokemonMaster') || '0') || null,
  setLogedUser: function (changeUserData: UserData): void {
    throw new Error('Function not implemented.');
  },
});
// eslint-disable-next-line react-refresh/only-export-components
export function useUserData() {
  return useContext(UserDataContext);
}

// selected context

interface SelectedContext {
  selected: number;
  setSelected: (selectedPokemonId: number) => void;
}

const SelectedContext = createContext<SelectedContext>({
  selected: 0,
  setSelected: function (selectedPokemonId: number): void {
    throw new Error('Function not implemented.');
  },
});

export function useSelectedId() {
  return useContext(SelectedContext);
}
const ContextProvider = ({ children }: any) => {
  const [logedUser, setLogedUser] = useState(
    isLocalStorageAccessible()
      ? JSON.parse(localStorage.getItem('pokemonMaster') || '0') || null
      : null
  );
  const [selected, setSelected] = useState<number>(0);
  return (
    <UserDataContext.Provider value={{ logedUser, setLogedUser }}>
      <SelectedContext.Provider value={{ selected, setSelected }}>
        {children}
      </SelectedContext.Provider>
    </UserDataContext.Provider>
  );
};

export default ContextProvider;
