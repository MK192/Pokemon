import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// TODO: separate code with empty line to make it more readable
// example:
// ----------------------------------------------------
// import GlobalStyles from './styles/GlobalStyles.ts';
//
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(...
// ----------------------------------------------------

import GlobalStyles from './styles/GlobalStyles.ts';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>
);
