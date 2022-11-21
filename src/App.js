import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Legend from './components/legend/Legend';
import Legends from './components/legends/Legends';
import Nav from './components/nav/Nav';
import Nav_small from './components/nav/Nav_small';

function App() {
	return (
		<React.Fragment>
			<Nav_small />
			<Nav />
			<main>
				<Routes>
					<Route path="apexlegends/" element={<Legends />} />
					<Route path="apexlegends/legend/:id" element={<Legend />} />
				</Routes>
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;
