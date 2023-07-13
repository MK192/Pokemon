import { FormData, UserData } from '../types/types';

/* this functions checks is localstorage available to read or write */
// TODO: think about simplifying localstorage function,
// now we need to wrap every code in "if (isLocalStorageAccessible())" check,
// it is ok but it could be handled better

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
