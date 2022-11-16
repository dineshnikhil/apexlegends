import React from 'react';
import classes from './NavLink.module.css';

function NavLink(props) {
	return (
		<a href="/" className={classes.nav_link}>
			{props.title}
		</a>
	);
}

export default NavLink;
