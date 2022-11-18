import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Legends from './components/legends/Legends';
import Nav from './components/nav/Nav';
import Nav_small from './components/nav/Nav_small';

function App() {
	return (
		<React.Fragment>
			<Nav_small />
			<Nav />
			<Legends />
			<Footer />
		</React.Fragment>
	);
}

export default App;
