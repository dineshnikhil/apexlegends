import React from 'react';
import classes from './Legends.module.css';

import LegendCard from './LegendCard';
import { legends } from '../legend/legends';

// images imports
import apex_second_logo from '../../assets/images/logos/apex-white-icon.svg';
import GeneralButton from '../buttons/GeneralButton';

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
			<div className={classes.play_info}>
				<h1>PLAY FOR FREE*</h1>
				<p>
					On PlayStation®4, PlayStation®5, Xbox One, Xbox Series X|S, Nintendo
					Switch, and PC via EA app and Steam.
				</p>
				<GeneralButton content="PLAY FREE NOW" />
				<p>
					*Applicable platform account and platform subscription (sold
					separately) may be required. Persistent internet connection and EA
					account required. Age restrictions apply. Includes in-game purchases.
				</p>
			</div>
		</div>
	);
}

export default Legends;
