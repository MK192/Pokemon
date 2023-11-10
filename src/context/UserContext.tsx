import { createContext, useContext, useState } from 'react';
import { isLocalStorageAccessible } from '../utils/functions';
import { UserData } from '../types/types';

// user data context
interface UserDataContext {
    loggedUser: null | UserData;
    setLogedUser: (changeUserData: UserData) => void;
}

const UserDataContext = createContext<UserDataContext>({
    loggedUser:
        JSON.parse(localStorage.getItem('pokemonMaster') || '0') || null,
    setLogedUser: function (changeUserData: UserData): void {
        throw new Error('Function not implemented.');
    },
});
// eslint-disable-next-line react-refresh/only-export-components
export function useUserData() {
    return useContext(UserDataContext);
}

const UserContext = ({ children }: any) => {
    const [loggedUser, setLogedUser] = useState(
        isLocalStorageAccessible()
            ? JSON.parse(localStorage.getItem('pokemonMaster') || '0') || null
            : null
    );

    return (
        <UserDataContext.Provider value={{ loggedUser, setLogedUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;
