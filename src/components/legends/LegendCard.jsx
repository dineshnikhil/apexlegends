import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './LegendCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function LegendCard(props) {
	return (
		<div className={classes.legend_card}>
			<img src={props.legend.card_img} alt="legend image" />
			<h3>{props.legend.name}</h3>
			<h4>{props.legend.type}</h4>
			<NavLink className={classes.nav_link} to={'/legend/' + props.legend.id}>
				<FontAwesomeIcon icon={faArrowRight} />
			</NavLink>
		</div>
	);
}

export default LegendCard;
