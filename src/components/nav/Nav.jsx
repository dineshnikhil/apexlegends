import React from 'react';
import classes from './Nav.module.css';
// image imports
import nav_logo from '../../assets/images/logos/apex_nav_logo.svg';
import NavLink from './NavLinks/NavLink';
import DownloadButton from '../buttons/DownloadButton';

function Nav() {
	var nav_links = [
		'About',
		'Modes',
		'Season',
		'BattlePass',
		'News&Media',
		'Comunity',
		'Compete',
	];
	return (
		<nav className={classes.nav_div}>
			<div className={classes.nav_left_part}>
				<img src={nav_logo} alt="apex_lengeds_logo" />
				<div className={classes.nav_links_div}>
					{nav_links.map((link) => (
						<NavLink title={link} />
					))}
				</div>
			</div>
			<div className={classes.nav_right_part}>
				<DownloadButton />
			</div>
		</nav>
	);
}

export default Nav;
