import React from 'react';
import classes from './Nav_small.module.css';
// importing the icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

function Nav_small() {
	return (
		<nav className={classes.nav_small}>
			<FontAwesomeIcon icon={faUser} />
			<FontAwesomeIcon icon={faQuestion} />
		</nav>
	);
}

export default Nav_small;
