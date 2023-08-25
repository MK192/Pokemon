import Login from './components/Login';
import PokemonList from './components/PokemonList';
import PokemonSingle from './components/PokemonSingle';
import SelectedPokemonContext from './context/SelectedPokemonContext';
import UserContext from './context/UserContext';
import Nav from './components/Nav';
import isPropValid from '@emotion/is-prop-valid';

/* StyleSheetManager and isPropValid is used because styled-components
version 6+ to prevent warning in console when props are provided to styled file
*/
import { StyleSheetManager } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isLocalStorageAccessible } from './utils/functions';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<string | null>(null);

    useEffect(() => {
        if (isLocalStorageAccessible()) {
            const storage = localStorage.getItem('pokemonMaster');
            setUserData(storage || null);

            userData ? setIsLoggedIn(true) : setIsLoggedIn(false);
        }
    }, [userData, isLoggedIn]);

    return (
        <>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <BrowserRouter>
                    <SelectedPokemonContext>
                        <UserContext>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        !isLoggedIn ? (
                                            <Login setIsLoged={setIsLoggedIn} />
                                        ) : (
                                            <PokemonList />
                                        )
                                    }
                                />
                                <Route
                                    path="/pokemon/:id"
                                    element={<PokemonSingle />}
                                />
                            </Routes>
                        </UserContext>
                    </SelectedPokemonContext>
                </BrowserRouter>
            </StyleSheetManager>
        </>
    );
}

export default App;
