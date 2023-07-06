import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Nav from './components/Nav';
import Login from './components/Login';
import { useState } from 'react';
import { isLocalStorageAccessible } from './utils/functions';
function App() {
  const [isLoged, setIsloged] = useState(false);
  return (
    <>
      <Nav />
      {!isLoged ? <Login /> : null}
    </>
  );
}

export default App;
