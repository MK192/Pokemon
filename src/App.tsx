// TODO: organise and sort imports in whole app and remove unused ones
// TODO: create prettier config file for standardised code formating

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Nav from './components/Nav';
import Login from './components/Login';
import Pokemons from './components/Pokemons';
import ContextProvider from './components/context/ContextProvider';
import { useEffect, useState } from 'react';
import { isLocalStorageAccessible } from './utils/functions';
function App() {
	const [isLoged, setIsLoged] = useState(false);
	const [userData, setUserData] = useState<string | null>(null);

	useEffect(() => {
		if (isLocalStorageAccessible()) {
			const storage = localStorage.getItem('pokemonMaster');
			setUserData(storage || null);

			userData ? setIsLoged(true) : setIsLoged(false);
		}
	}, [userData, isLoged]);

	return (
		<>
			<ContextProvider>
				<Nav />
				{!isLoged ? <Login setIsLoged={setIsLoged} /> : <Pokemons />}
			</ContextProvider>
		</>
	);
}

export default App;
