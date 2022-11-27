import React from 'react';
import classes from './Legends.module.css';

import LegendCard from './LegendCard';
import { legends } from '../legend/legends';

// images imports
import apex_second_logo from '../../assets/images/logos/apex-white-icon.svg';

function Legends() {
	return (
		<div className={classes.legends_home_div}>
			<div className={classes.legends_home_intro_div}>
				<img src={apex_second_logo} alt="apex legends secound logo" />
				<h2>MEET THE LEGENDS</h2>
				<p>
					It takes grit, talent, and a lot of luck to become a legend. Pick your
					favorite and see what their unique set of skills can do for your
					squad.
				</p>
			</div>
			<div className={classes.legends_home_cards_div}>
				{legends.map((obj) => (
					<LegendCard legend={obj} key={obj.id} />
				))}
			</div>
		</div>
	);
}

export default Legends;
