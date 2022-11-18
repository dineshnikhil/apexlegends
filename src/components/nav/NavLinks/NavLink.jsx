import React from 'react';
import classes from './NavLink.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function NavLink(props) {
	return (
		<a href="/" className={classes.nav_link}>
			{props.title} <FontAwesomeIcon icon={faAngleDown} />
		</a>
	);
}

export default NavLink;
