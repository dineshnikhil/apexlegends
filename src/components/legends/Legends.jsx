import React from 'react';
import classes from './Legends.module.css';

import LegendCard from './LegendCard';

// images imports
import apex_second_logo from '../../assets/images/logos/apex-white-icon.svg';
// legends images imports
import bangalore from '../../assets/images/legends_cards/bangalore.png';
import bloodhound from '../../assets/images/legends_cards/bloodhound.png';
import catalyst from '../../assets/images/legends_cards/catalyst.png';
import caustic from '../../assets/images/legends_cards/caustic.png';
import fuse from '../../assets/images/legends_cards/fuse.png';
import ash from '../../assets/images/legends_cards/one.png';
import gibraltar from '../../assets/images/legends_cards/gibraltar.png';
import horizon from '../../assets/images/legends_cards/horizon.png';
import lifeline from '../../assets/images/legends_cards/lifeline.png';
import loba from '../../assets/images/legends_cards/loba.png';
import maggie from '../../assets/images/legends_cards/maggie.png';
import mirage from '../../assets/images/legends_cards/mirage.png';
import newcastle from '../../assets/images/legends_cards/newcastle.png';
import octane from '../../assets/images/legends_cards/octane.png';
import pathfinder from '../../assets/images/legends_cards/pathfinder.png';
import rampart from '../../assets/images/legends_cards/rampart.png';
import revenant from '../../assets/images/legends_cards/revenant.png';
import seer from '../../assets/images/legends_cards/seer.png';
import valkyrie from '../../assets/images/legends_cards/valkyrie.png';
import vantage from '../../assets/images/legends_cards/vantage.png';
import wattson from '../../assets/images/legends_cards/wattson.png';
import wraith from '../../assets/images/legends_cards/wraith.png';
import crypto from '../../assets/images/legends_cards/crypto.png';

function Legends() {
	var lenagend_image_arr = [
		{
			name: 'Ash',
			img: ash,
			tag: 'Incisive Instigator',
		},
		{
			name: 'Bangalore',
			img: bangalore,
			tag: 'Professional Soldier',
		},
		{
			name: 'Bloodhound',
			img: bloodhound,
			tag: 'Technological Tracker',
		},
		{
			name: 'Catalyst',
			img: catalyst,
			tag: 'Defensive Conjure',
		},
		{
			name: 'Caustic',
			img: caustic,
			tag: 'Toxic Trapper',
		},
		{
			name: 'Crypto',
			img: crypto,
			tag: 'Surveillance Expert',
		},
		{
			name: 'Fuse',
			img: fuse,
			tag: 'Bombastic Explosives Expert',
		},
		{
			name: 'Gibraltor',
			img: gibraltar,
			tag: 'Shielded Fortress',
		},
		{
			name: 'Horizon',
			img: horizon,
			tag: 'Gravitational Manipulator',
		},
		{
			name: 'Lifeline',
			img: lifeline,
			tag: 'Combat Medic',
		},
		{
			name: 'Loba',
			img: loba,
			tag: 'Translocating Thief',
		},
		{
			name: 'Mad Maggie',
			img: maggie,
			tag: 'Rebel Warlord',
		},
		{
			name: 'Mirage',
			img: mirage,
			tag: 'Holographic Trickster',
		},
		{
			name: 'Newcastle',
			img: newcastle,
			tag: 'Heroic Defender',
		},
		{
			name: 'Octane',
			img: octane,
			tag: 'High-Speed Daredevil',
		},
		{
			name: 'Pathfinder',
			img: pathfinder,
			tag: 'Forward Scout',
		},
		{
			name: 'Rampart',
			img: rampart,
			tag: 'Amped Modder',
		},
		{
			name: 'Revenant',
			img: revenant,
			tag: 'Synthetic Nightmare',
		},
		{
			name: 'seer',
			img: seer,
			tag: 'Ambush Artist',
		},
		{
			name: 'Valkyrie',
			img: valkyrie,
			tag: 'Winged Avenger',
		},
		{
			name: 'Vantage',
			img: vantage,
			tag: 'Sniper Savant',
		},
		{
			name: 'Wattson',
			img: wattson,
			tag: 'Static Defender',
		},
		{
			name: 'Wraith',
			img: wraith,
			tag: 'Interdimensinal Skirmisher',
		},
	];
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
				{lenagend_image_arr.map((obj) => (
					<LegendCard
						char_img={obj.img}
						char_name={obj.name}
						char_tag={obj.tag}
					/>
				))}
			</div>
		</div>
	);
}

export default Legends;
