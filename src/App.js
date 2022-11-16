import React from 'react';
import './App.css';
import Legends from './components/legends/Legends';
import Nav from './components/nav/Nav';
import Nav_small from './components/nav/Nav_small';

function App() {
	return (
		<React.Fragment>
			<Nav_small />
			<Nav />
			<Legends />
		</React.Fragment>
	);
}

export default App;
