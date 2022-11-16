import React from 'react';
import classes from './LegendCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function LegendCard(props) {
	return (
		<div className={classes.legend_card}>
			<img src={props.char_img} alt="legend image" />
			<h3>{props.char_name}</h3>
			<h4>{props.char_tag}</h4>
			<button>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</div>
	);
}

export default LegendCard;
