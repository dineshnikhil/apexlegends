import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classes from './Legend.module.css';

// importing the navigation icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// importing the poster image
import poster_img from '../../assets/images/backgrounds/bangalore.jpg';
import { legends } from './legends';

// importing the bg for ability
import bg from '../../assets/images/backgrounds/bg-legends.jpg';
import Suggestions from './Suggestions';

function Legend() {
	var parm = useParams();
	var random_num = Math.floor(Math.random() * 23 + 1);
	var random_num_2 = Math.floor(Math.random() * 23 + 1);
	var random_num_3 = Math.floor(Math.random() * 23 + 1);
	var random_legned = legends.filter((legend) => {
		return legend.id == random_num;
	});
	var random_legned_2 = legends.filter((legend) => {
		return legend.id == random_num_2;
	});
	var random_legned_3 = legends.filter((legend) => {
		return legend.id == random_num_3;
	});
	var i_needed_legend = legends.filter((legend) => {
		return legend.id == parm.id;
	});

	// ========
	// === generating the left navigation number =====
	function left_num() {
		if (parseInt(parm.id) - 1 <= 0) {
			return 22;
		} else {
			return parseInt(parm.id) - 2;
		}
	}
	function left_nav_num() {
		if (parm.id == 1) {
			return 23;
		} else {
			return parseInt(parm.id) - 1;
		}
	}
	// === generationg the right navigation number =======
	function right_num() {
		if (parseInt(parm.id) + 1 > 23) {
			return 0;
		} else {
			return parseInt(parm.id) + 1 - 1;
		}
	}
	function right_nav_num() {
		if (parm.id == 23) {
			return 1;
		} else {
			return parseInt(parm.id) + 1;
		}
	}

	var left_one = left_num();
	var right_one = right_num();
	console.log(left_one, right_one);
	// ============

	var my_style_1 = {
		backgroundImage: `url(${i_needed_legend[0].full_img})`,
		backgroundRepeat: 'no-repeat',
		// backgroundPosition: 'left 15% bottom 100%',
		backgroundSize: '150% auto',
		// backgroundPosition: 'center center',
	};
	var my_style_2 = {
		backgroundImage: `url(${bg})`,
		backgroundRepeat: 'no-repeat',
		// backgroundPosition: 'left 15% bottom 100%',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
	};
	return (
		<div>
			<div className={classes.poster_div}>
				<div className={classes.navigate_div}>
					<div className={classes.navigate_button}>
						<NavLink
							className={classes.legend_nav_link}
							to={'/legend/' + left_nav_num().toString()}
						>
							<FontAwesomeIcon icon={faChevronLeft} />
							{legends[left_one].name}
						</NavLink>
					</div>
					<div className={classes.navigate_button}>
						<NavLink
							className={classes.legend_nav_link}
							to={'/legend/' + right_nav_num().toString()}
						>
							{legends[right_one].name}
							<FontAwesomeIcon icon={faChevronRight} />
						</NavLink>
					</div>
				</div>
			</div>
			<div className={classes.legend_div}>
				<div style={my_style_1} className={classes.legend_div_img}>
					{/* <img src={i_needed_legend[0].full_img} alt="legend image" /> */}
				</div>
				<div className={classes.legend_div_info}>
					<h4>"{i_needed_legend[0].tagline}"</h4>
					<h1>{i_needed_legend[0].name}</h1>
					<h3>{i_needed_legend[0].type}</h3>
					<p>{i_needed_legend[0].intro}</p>

					<div className={classes.table_form_info_div}>
						<div className={classes.table_form_info_div_child}>
							<h2>Real Name</h2>
							<h3>{i_needed_legend[0].real_name}</h3>
						</div>
						<div className={classes.table_form_info_div_child}>
							<h2>Age</h2>
							<h3>{i_needed_legend[0].age}</h3>
						</div>
						<div className={classes.table_form_info_div_child}>
							<h2>Home World</h2>
							<h3>{i_needed_legend[0].home_world}</h3>
						</div>
						<div className={classes.table_form_info_div_child}>
							<h2>Tatical Ability</h2>
							<h3>{i_needed_legend[0].tactical_ability}</h3>
						</div>
						<div className={classes.table_form_info_div_child}>
							<h2>Passive Ability</h2>
							<h3>{i_needed_legend[0].passive_ability}</h3>
						</div>
						<div className={classes.table_form_info_div_child}>
							<h2>Ultimate Ability</h2>
							<h3>{i_needed_legend[0].ultimate_ability}</h3>
						</div>
					</div>
				</div>
			</div>
			<div style={my_style_2} className={classes.ability_div}>
				<div className={classes.ability_div_child}>
					<img
						src={i_needed_legend[0].tractical_ability_img}
						alt="tactical ability image"
					/>
					<h2>Tactical Ability</h2>
					<h3>{i_needed_legend[0].tactical_ability}</h3>
				</div>
				<div className={classes.ability_div_child}>
					<img
						src={i_needed_legend[0].passive_ability_img}
						alt="tactical ability image"
					/>
					<h2>Passive Ability</h2>
					<h3>{i_needed_legend[0].passive_ability}</h3>
				</div>
				<div className={classes.ability_div_child}>
					<img
						src={i_needed_legend[0].ultimate_ability_img}
						alt="tactical ability image"
					/>
					<h2>Ultimate Ability</h2>
					<h3>{i_needed_legend[0].ultimate_ability}</h3>
				</div>
			</div>
			{/* <div className={classes.random_suggestion_legends}>
				{random_legned.map((obj) => (
					<LegendCard legend={obj} key={obj.id} />
				))}
				{random_legned_2.map((obj) => (
					<LegendCard legend={obj} key={obj.id} />
				))}
				{random_legned_3.map((obj) => (
					<LegendCard legend={obj} key={obj.id} />
				))}
			</div> */}
			<Suggestions />/
		</div>
	);
}

export default Legend;
