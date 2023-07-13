// TODO: context folder should be ouside components folder

import { createContext, useContext, useState } from 'react';
import { isLocalStorageAccessible } from '../../utils/functions';
import { UserData } from '../../types/types';

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
const ContextProvider = ({ children }: any) => {
	const [logedUser, setLogedUser] = useState(
		isLocalStorageAccessible()
			? JSON.parse(localStorage.getItem('pokemonMaster') || '0') || null
			: null
	);

	return (
		<UserDataContext.Provider value={{ logedUser, setLogedUser }}>
			{children}
		</UserDataContext.Provider>
	);
};

export default ContextProvider;
