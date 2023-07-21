import Nav from './components/Nav';
import Login from './components/Login';
import PokemonList from './components/PokemonList';
import PokemonSingle from './components/PokemonSingle';
import ContextProvider from './context/ContextProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <ContextProvider>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                !isLoged ? <Login setIsLoged={setIsLoged} /> : <PokemonList />
              }
            />
            <Route path="/pokemon/:id" element={<PokemonSingle />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
