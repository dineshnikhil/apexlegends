import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './LegendCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function LegendCard(props) {
	const [is_hide, set_is_hide] = useState('inline-block');
	useEffect(() => {
		if (!props.is_hide) {
			set_is_hide('none');
		}
	});
	var my_style = {
		display: `${is_hide}`,
	};
	return (
		<div className={classes.legend_card}>
			<img src={props.legend.card_img} alt="legend image" />
			<h3>{props.legend.name}</h3>
			<h4>{props.legend.type}</h4>
			<div style={my_style}>
				<NavLink className={classes.nav_link} to={'/legend/' + props.legend.id}>
					<FontAwesomeIcon icon={faArrowRight} />
				</NavLink>
			</div>
		</div>
	);
}

export default LegendCard;
