import React from 'react';
import classes from './Footer.module.css';

// IMAGE IMPORTS
import apex from '../../assets/images/nav_logos/apex.png';
import apex_esrb from '../../assets/images/nav_logos/apex-esrb.svg';
import apex_global_eries from '../../assets/images/nav_logos/apex-global-series.svg';
import apex_mobile from '../../assets/images/nav_logos/apex-mobile.svg';
import apex_respawn from '../../assets/images/nav_logos/apex-respawn.png';
import ea_ring from '../../assets/images/nav_logos/ea-ring.png';
// icon logo imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebookF,
	faYoutube,
	faInstagram,
	faTwitch,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	var footer_nav_links_arr = [
		'Home',
		'About',
		'Legends',
		'FAQ',
		'PC Specs',
		'News',
		'Media',
		'Forums',
		'PlayFreeNow*',
	];

	var footer_nav_first_logos_arr = [
		{
			id: 2,
			img: apex_global_eries,
			des: 'apex legends game related logo.',
		},
		{
			id: 3,
			img: apex_mobile,
			des: 'apex legends game related logo.',
		},
		{
			id: 4,
			img: apex_respawn,
			des: 'apex legends game related logo.',
		},
	];

	var footer_social_links_arr = [
		{
			id: 1,
			media_logo: faTwitter,
			link: '#',
		},
		{
			id: 2,
			media_logo: faInstagram,
			link: '#',
		},
		{
			id: 3,
			media_logo: faTwitch,
			link: '#',
		},
		{
			id: 4,
			media_logo: faFacebookF,
			link: '#',
		},
		{
			id: 5,
			media_logo: faYoutube,
			link: '#',
		},
	];

	var footer_second_links_arr = [
		'BROWSE GAMES',
		'ABOUT',
		'SUPPORT',
		'SHOP ON EA APP',
		'ACCESSIBILITY',
	];

	return (
		<div>
			<div className={classes.nav_first_div}>
				<div className={classes.nav_first_one}>
					<div className={classes.nav_first_one_one}>
						{footer_nav_links_arr.map((link) => (
							<a href="#">{link}</a>
						))}
					</div>
					<div className={classes.nav_first_one_two}>
						<h2>JOIN THE CONVERSATION</h2>
						{footer_social_links_arr.map((obj) => (
							<a href={obj.link} key={obj.id}>
								<FontAwesomeIcon icon={obj.media_logo} />
							</a>
						))}
					</div>
				</div>
				<div className={classes.nav_first_two}>
					<img src={apex} alt="apex legends game logo" />
					<div className={classes.nav_first_two_one}>
						{footer_nav_first_logos_arr.map((obj) => (
							<img src={obj.img} alt={obj.des} key={obj.id} />
						))}
					</div>
					<div className={classes.nav_first_two_two}>
						<img src={apex_esrb} alt="apex legends game logo" />
					</div>
				</div>
			</div>
			<div className={classes.nav_second_div}>
				<div className={classes.nav_second_one}>
					<img src={ea_ring} alt="parent company logo" />
				</div>
				<div className={classes.nav_second_two}>
					<div>
						{footer_second_links_arr.map((link) => (
							<a href="#">{link}</a>
						))}
					</div>
					<div className={classes.nav_second_two_two}>
						<p>Legal & Privacy User Agreement</p>
						<p>Privacy & Cookie Policy (Your Privacy Rights)</p>
						<h3>© 2022 Electronic Arts Inc.</h3>
					</div>
				</div>
				<div className={classes.nav_second_three}>
					<button>Language united-kingdom</button>
				</div>
			</div>
		</div>
	);
}

export default Footer;
