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
	// var lenagend_image_arr = [
	// 	{
	// 		name: 'Ash',
	// 		img: ash,
	// 		tag: 'Incisive Instigator',
	// 	},
	// 	{
	// 		name: 'Bangalore',
	// 		img: bangalore,
	// 		tag: 'Professional Soldier',
	// 	},
	// 	{
	// 		name: 'Bloodhound',
	// 		img: bloodhound,
	// 		tag: 'Technological Tracker',
	// 	},
	// 	{
	// 		name: 'Catalyst',
	// 		img: catalyst,
	// 		tag: 'Defensive Conjure',
	// 	},
	// 	{
	// 		name: 'Caustic',
	// 		img: caustic,
	// 		tag: 'Toxic Trapper',
	// 	},
	// 	{
	// 		name: 'Crypto',
	// 		img: crypto,
	// 		tag: 'Surveillance Expert',
	// 	},
	// 	{
	// 		name: 'Fuse',
	// 		img: fuse,
	// 		tag: 'Bombastic Explosives Expert',
	// 	},
	// 	{
	// 		name: 'Gibraltor',
	// 		img: gibraltar,
	// 		tag: 'Shielded Fortress',
	// 	},
	// 	{
	// 		name: 'Horizon',
	// 		img: horizon,
	// 		tag: 'Gravitational Manipulator',
	// 	},
	// 	{
	// 		name: 'Lifeline',
	// 		img: lifeline,
	// 		tag: 'Combat Medic',
	// 	},
	// 	{
	// 		name: 'Loba',
	// 		img: loba,
	// 		tag: 'Translocating Thief',
	// 	},
	// 	{
	// 		name: 'Mad Maggie',
	// 		img: maggie,
	// 		tag: 'Rebel Warlord',
	// 	},
	// 	{
	// 		name: 'Mirage',
	// 		img: mirage,
	// 		tag: 'Holographic Trickster',
	// 	},
	// 	{
	// 		name: 'Newcastle',
	// 		img: newcastle,
	// 		tag: 'Heroic Defender',
	// 	},
	// 	{
	// 		name: 'Octane',
	// 		img: octane,
	// 		tag: 'High-Speed Daredevil',
	// 	},
	// 	{
	// 		name: 'Pathfinder',
	// 		img: pathfinder,
	// 		tag: 'Forward Scout',
	// 	},
	// 	{
	// 		name: 'Rampart',
	// 		img: rampart,
	// 		tag: 'Amped Modder',
	// 	},
	// 	{
	// 		name: 'Revenant',
	// 		img: revenant,
	// 		tag: 'Synthetic Nightmare',
	// 	},
	// 	{
	// 		name: 'seer',
	// 		img: seer,
	// 		tag: 'Ambush Artist',
	// 	},
	// 	{
	// 		name: 'Valkyrie',
	// 		img: valkyrie,
	// 		tag: 'Winged Avenger',
	// 	},
	// 	{
	// 		name: 'Vantage',
	// 		img: vantage,
	// 		tag: 'Sniper Savant',
	// 	},
	// 	{
	// 		name: 'Wattson',
	// 		img: wattson,
	// 		tag: 'Static Defender',
	// 	},
	// 	{
	// 		name: 'Wraith',
	// 		img: wraith,
	// 		tag: 'Interdimensinal Skirmisher',
	// 	},
	// ];
	var legends = [
		{
			id: 1,
			name: 'ASH',
			intro:
				'Born in the unforgiving Frontier, Dr. Ashleigh Reid - still very much a human - learned early that the only person who was going to look out for her was herself. One day, she was hired by a mercenary group for a delicate job: steal an experimental fuel source being researched in the Outlands city of Olympus. It was the perfect job for Reid, who infiltrated and psychologically manipulated the researchers for years. When the lab self-destructed, she died.',
			tagline: 'See your imperfections in your enemies — then crush them.',
			type: 'Incisive Instigator',
			real_name: 'Dr. Ashleigh Reid',
			age: 121,
			home_world: 'Unknown',
			tactical_ability: 'Arc Snare',
			passive_ability: 'Marked For Death',
			ultimate_ability: 'Phase Breach',
			card_img: ash,
			full_img: ash,
			// tractical_ability_img: ash - one,
			// passive_ability_img: ash - two,
			// ultimate_ability_img: ash - three,
		},
		{
			id: 2,
			name: 'BANGALORE',
			intro:
				'Born into a military family where she, her parents, and her four older brothers all served with the IMC, Bangalore has been an exceptional soldier her whole life. Dedicated to the IMC cause, she was top of her class at the IMC Military Academy and the only cadet who could take apart a Peacekeeper, equip it with a Precision Choke hop-up, and put it back together in under twenty seconds blindfolded.',
			tagline: 'Name the weapon--I"ll still beat you.',
			type: 'Professional Soldier',
			real_name: 'Anita Williams',
			age: 38,
			home_world: 'Gridiron',
			tactical_ability: 'Smoke Launcher',
			passive_ability: 'Double Time',
			ultimate_ability: 'Rolling Thunder',
			card_img: bangalore,
			full_img: bangalore,
			// tractical_ability_img: bangalore - one,
			// passive_ability_img: bangalore - two,
			// ultimate_ability_img: bangalore - three,
		},
		{
			id: 3,
			name: 'BLOODHOUND',
			intro:
				'Bloodhound is known across the Outlands as one of the greatest game hunters the Frontier has ever seen. The child of two engineers stationed at the New Dawn industrial plant on Talos, Bloodhound was taken in by their uncle Artur after a meltdown destroyed the facility and killed both their parents. Artur taught them the Old Ways, a belief system that focuses on the glory of nature and rejects modern technology. Yet Bloodhound was constantly drawn to technological marvels, and ultimately used both new and old methods to take down a Goliath that preyed on the people of their village, forever changing their lifes path.',
			tagline: 'I am the hunter the Gods have sent.',
			type: 'Technological Tracker',
			real_name: 'Unknown',
			age: -1,
			home_world: 'Talos',
			tactical_ability: 'Eye of the Allfather',
			passive_ability: 'Tracker',
			ultimate_ability: 'Beast of the Hunt',
			card_img: bloodhound,
			full_img: bloodhound,
			// tractical_ability_img: bloodhound - one,
			// passive_ability_img: bloodhound - two,
			// ultimate_ability_img: bloodhound - three,
		},
		{
			id: 4,
			name: 'CATALYST',
			intro:
				'Tressa Crystal Smith isnt everyones cup of teaan elegant, standoffish woman, she likes crystals more than she likes most people. She grew up on Boreas, a faltering planet with a deteriorating moon. Conformity and efficiency were necessities there, but that never suited Tressa. Instead, she was more at home with fellow misfits who spent their time on crystal readings, moon rituals and personal witcherythey supported her through her self-discovery and transition, making her turbulent teenage years easier and less lonely. But when her closest friend went to extreme lengths to save their moon from corporate encroachment, Tressa was caught in the middle. Ultimately, she ran away from home, finding solace in the one place her friend cared about most: their moon, Cleo.',
			tagline: 'See your imperfections in your enemies — then crush them.',
			type: 'Defensive Conjurer',
			real_name: 'Tressa Crystal Smith',
			age: 29,
			home_world: 'Boreas',
			tactical_ability: 'Piercing Spikes',
			passive_ability: 'Barricade',
			ultimate_ability: 'Dark Veil',
			card_img: catalyst,
			full_img: catalyst,
			// tractical_ability_img: catalyst - one,
			// passive_ability_img: catalyst - two,
			// ultimate_ability_img: catalyst - three,
		},
		{
			id: 5,
			name: 'CAUSTIC',
			intro:
				'Alexander Nox used to be one of the brightest scientists in the employ of Humbert Labs, the Frontier’s leading manufacturer of pesticide gases. Nox worked day and night developing new formulas for the glut of pesticides needed to protect the crops that sustained the Outlands. But he soon realized that progress was being hampered by his testing methods. He needed to test on more than just inert tissue: he needed living subjects.',
			tagline: 'I dont concern myself with the ambitions of insects.',
			type: 'Toxic Trapper',
			real_name: 'Alexander Nox',
			age: 48,
			home_world: 'Gaea',
			tactical_ability: 'Nox Gas Trap',
			passive_ability: 'Nox Vision',
			ultimate_ability: 'Nox Gas Grenade',
			card_img: caustic,
			full_img: caustic,
			// tractical_ability_img: caustic - one,
			// passive_ability_img: caustic - two,
			// ultimate_ability_img: caustic - three,
		},
		{
			id: 6,
			name: 'CRYPTO',
			intro:
				'Crypto specializes in secrets. A brilliant hacker and encryption expert, he uses aerial drones to spy on his opponents in the Apex Arena without being seen. He also has a secret of his own: his name is Tae Joon Park, and he joined the Apex Games to find the people who framed him for murder.',
			tagline: 'Its hard to be scared when youre prepared.',
			type: 'Surveillance Expertf',
			real_name: 'Tae Joon Park',
			age: 31,
			home_world: 'Gaea',
			tactical_ability: 'Surveillance Drone',
			passive_ability: 'Neurolink',
			ultimate_ability: 'Drone EMP',
			card_img: crypto,
			full_img: crypto,
			// tractical_ability_img: crypto - one,
			// passive_ability_img: crypto - two,
			// ultimate_ability_img: crypto - three,
		},
		{
			id: 7,
			name: 'FUSE',
			intro:
				'Ladies’ man, man’s man, and all-round manly man, Fuse is a one man wrecking crew... and he knows it. Fuse exudes joy; he’s a laid-back explosives enthusiast who’s damn near covered in things that go BOOM. Fuse doesn’t lack confidence, but he often lacks a plan. He’s a blow-up-first ask-questions-later kinda guy, who’s always looking for a good scrap.',
			tagline: 'f there’s dirty deeds to do, I’ll do ‘em dirt cheap.',
			type: 'Bombastic Explosives Expert',
			real_name: 'Walter Fitzroy',
			age: 54,
			home_world: 'Salvo',
			tactical_ability: 'Knuckle Cluster',
			passive_ability: 'Grenadier',
			ultimate_ability: 'The Motherlode',
			card_img: fuse,
			full_img: fuse,
			// tractical_ability_img: fuse - one,
			// passive_ability_img: fuse - two,
			// ultimate_ability_img: fuse - three,
		},
		{
			id: 8,
			name: 'GIBRALTAR',
			intro:
				'Gibraltar is a gentle giant with a wild side. The son of two SARAS (Search and Rescue Association of Solace) volunteers, he has always been skilled at getting others out of dangerous situations that are common in the Outlands. However, he only began to understand the value of protecting others when he and his boyfriend stole his father’s motorcycle, took it on a joyride, and got trapped by a deadly mudslide. His parents saved them, and his father lost an arm in the process. Gibraltar has never forgotten that sacrifice and has devoted his life to helping those in need.',
			tagline: 'Try to move me; itll be fun.',
			type: 'Shielded Fortress',
			real_name: 'Makoa Gibraltar',
			age: 30,
			home_world: 'Solace',
			tactical_ability: 'Dome of Protection',
			passive_ability: 'Gun Shield',
			ultimate_ability: 'Defensive Bombardment',
			card_img: gibraltar,
			full_img: gibraltar,
			// tractical_ability_img: gibraltar - one,
			// passive_ability_img: gibraltar - two,
			// ultimate_ability_img: gibraltar - three,
		},
		{
			id: 9,
			name: 'HORIZON',
			intro:
				'Almost a century ago, the Outlands were dangling on the edge of a cataclysmic energy crisis. Dr. Mary Somers, a charmingly eccentric astrophysicist, was hired to find a solution. Mary moved her family to the scientific research station on Olympus and set to work.With the help of her apprentice, Dr. Reid, Mary discovered Branthium - an element she was convinced could be the key to limitless energy. But Branthium can be found only on the accretion disk of a black hole, so Mary and Dr. Reid departed on a dangerous mission to prove her theory right.',
			tagline: 'Let’s have a wee play with the laws of physics, shall we?',
			type: 'Gravitational Manipulator',
			real_name: 'Dr. Mary Somers',
			age: 37,
			home_world: 'Psamathe',
			tactical_ability: 'Gravity Lift',
			passive_ability: 'Spacewalk',
			ultimate_ability: 'Black Hole',
			card_img: horizon,
			full_img: horizon,
			// tractical_ability_img: horizon - one,
			// passive_ability_img: horizon - two,
			// ultimate_ability_img: horizon - three,
		},
		{
			id: 10,
			name: 'LIFELINE',
			intro:
				'Ajay Che, aka Lifeline, isn’t someone you would expect to find in the Apex Games. The child of wealthy war profiteers, she left home when she learned of the damage her family had caused and enlisted in the Frontier Corps, a humanitarian organization that aids Frontier communities in need. She’s since devoted her life to helping others and joined the Apex Games to fund the Frontier Corps with her winnings.',
			tagline: 'Never quit. Thats how you win.',
			type: 'Combat Medic',
			real_name: 'Ajay Che',
			age: 121,
			home_world: 'Psamathe',
			tactical_ability: 'D.O.C. Heal Drone',
			passive_ability: 'Combat Medic',
			ultimate_ability: 'Care Package',
			card_img: lifeline,
			full_img: lifeline,
			// tractical_ability_img: lifeline - one,
			// passive_ability_img: lifeline - two,
			// ultimate_ability_img: lifeline - three,
		},
		{
			id: 11,
			name: 'LOBA',
			intro:
				'When Loba was nine, she looked on as simulacrum hitman Revenant killed her family. Left with nothing, Loba survived by picking pockets. As her skills improved, Loba used every tool at her disposal to lift herself from the gutter. Everything changed when she broke into a supposedly impenetrable facility and got her hands on the Jump Drive tech stored inside. With her new teleportation bracelet, the most secure and unattainable items were within her reach. So was her dream of living the high life.',
			tagline: 'Theres a certain elegance to combat. Ill show you.',
			type: 'Translocating Thief',
			real_name: 'Loba Andrade',
			age: 34,
			home_world: 'None',
			tactical_ability: 'Burglar’s Best Friend',
			passive_ability: 'Eye for Quality',
			ultimate_ability: 'Black Market Boutique',
			card_img: loba,
			full_img: loba,
			// tractical_ability_img: loba - one,
			// passive_ability_img: loba - two,
			// ultimate_ability_img: loba - three,
		},
		{
			id: 12,
			name: 'MIRAGE',
			intro:
				'Mirage is the kind of guy who likes to stand out. The youngest of four brothers, he perfected the art of fooling around to get attention. The one thing he took seriously was Holo-Pilot technology: introduced to the illusion-creating tech by his engineer mother, he poured over the mechanisms and learned all he could about them. Even when his brothers went MIA during the Frontier War, Mirage and his mother continued to develop holo devices, and the work brought them closer.',
			tagline:
				'I dont take myself too seriously. I dont take myself anywhere. I need to get out more.',
			type: 'Holographic Trickster',
			real_name: 'Elliott Witt',
			age: 30,
			home_world: 'Solace',
			tactical_ability: 'Psyche Out',
			passive_ability: 'Now You See Me..',
			ultimate_ability: 'Life of the Party',
			card_img: mirage,
			full_img: mirage,
			// tractical_ability_img: mirage - one,
			// passive_ability_img: mirage - two,
			// ultimate_ability_img: mirage - three,
		},
		{
			id: 13,
			name: 'MAD MAGGIE',
			intro:
				'Margaret Kōhere - the woman who would one day be known as Mad Maggie - grew up in one of the dustiest, dullest corners of Salvo without any family to speak of. She was fortunate, then, to meet a kindred chaotic spirit: an adventurous young boy named Walter Fitzroy. The two were inseparable, and in their teenage years, they became mercenaries. Eventually this duo grew into the Cracked Talon - a powerful mercenary operation. It was here she earned her nom de guerre: Mad Maggie. But when rival warlord Sandringham Kelly signed a treaty with the Syndicate, Maggie’s hopes for an independent Salvo were ruined, and Fuse abandoned her for the Games, leaving Maggie very mad indeed…',
			tagline: 'Im gonna make this world bleed.',
			type: 'Rebel Warlord',
			real_name: 'Margaret Kōhere',
			age: 55,
			home_world: 'Salvo',
			tactical_ability: 'RIOT DRILL',
			passive_ability: 'WARLORD’S IRE',
			ultimate_ability: 'WRECKING BALL',
			card_img: maggie,
			full_img: maggie,
			// tractical_ability_img: maggie - one,
			// passive_ability_img: maggie - two,
			// ultimate_ability_img: maggie - three,
		},
		{
			id: 14,
			name: 'OCTANE',
			intro:
				'One day, Octavio Silva was bored. In fact, he was bored most days. Son of the preoccupied CEO of Silva Pharmaceuticals and wanting for nothing in life, he entertained himself by performing death-defying stunts and posting holovids of them for his fans to gawk over. So, this day, he decided to set the course record for a nearby Gauntlet by launching himself across the finish line – using a grenade.',
			tagline: 'Whoa . . . what a rush!',
			type: 'High-Speed Daredevil',
			real_name: 'Octavio Silva',
			age: 24,
			home_world: 'Psamathe',
			tactical_ability: 'Stim',
			passive_ability: 'Swift Mend',
			ultimate_ability: 'Launch Pad',
			card_img: octane,
			full_img: octane,
			// tractical_ability_img: octane - one,
			// passive_ability_img: octane - two,
			// ultimate_ability_img: octane - three,
		},
		{
			id: 15,
			name: 'NEWCASTLE',
			intro:
				'Lamont Craig wasn’t like other dads in the neighborhood. Sure, he dropped the kids off at school and acted out multiple voices every night for Story Time with his toddler. But Lamont had secrets—the first being his real name, Jackson Williams.A top soldier for the IMC, Jackson went AWOL when he ignored direct orders to fight what he believed was a losing battle. He knew he would never be safe from the remnants of the IMC--and neither would his sister, Anita, as long as she was with him. So when he was presumed dead in a ship explosion, he used that opportunity to leave his life behind, even if it meant leaving her behind too.',
			tagline: 'Get behind me and youre untouchable, slick.',
			type: 'Heroic Defender',
			real_name: 'Jackson Williams',
			age: 40,
			home_world: 'Gridiron',
			tactical_ability: 'Mobile Shield',
			passive_ability: 'Retrieve the Wounded',
			ultimate_ability: 'Castle Wall',
			card_img: newcastle,
			full_img: newcastle,
			// tractical_ability_img: newcastle - one,
			// passive_ability_img: newcastle - two,
			// ultimate_ability_img: newcastle - three,
		},
		{
			id: 16,
			name: 'PATHFINDER',
			intro:
				'Pathfinder is the picture of optimism, despite his circumstances. A MRVN (Mobile Robotic Versatile eNtity) modified to specialize in location scouting and surveying, he booted up decades ago in an abandoned warehouse with no idea who created him or why. With only his MRVN designation to hint at his identity, Pathfinder eventually set off in search of his creator.',
			tagline: 'Losing isnt fun. Thats why I dont do it.',
			type: 'Forward Scout',
			real_name: 'MRVN',
			age: -1,
			home_world: 'He’s trying to find out!',
			tactical_ability: 'Grappling Hook',
			passive_ability: 'Insider Knowledge',
			ultimate_ability: 'Zipline Gun',
			card_img: pathfinder,
			full_img: pathfinder,
			// tractical_ability_img: pathfinder - one,
			// passive_ability_img: pathfinder - two,
			// ultimate_ability_img: pathfinder - three,
		},
		{
			id: 17,
			name: 'RAMPART',
			intro:
				'Rampart is a blue-collar, private business owner who just needs a big gun and a backpack full of scrap metal to get by in the dangerous, wild west world of the Outlands. Before opening her popular modding shop on Gaea, Ramya Parekh (Rampart for short) made a name for herself in the underground gauntlet circuit. Parekh climbed to the top showcasing pure skill using her custom-modded gear. She began taking jobs from smugglers, Syndicate members, and everyone in between. Some say it ain’t great unless it’s got “Rampart” written on it.',
			tagline:
				'If I ever let you down, it’s probably because I grew a bit tired of carrying you.',
			type: 'Amped Modder',
			real_name: 'Ramya Parekh',
			age: 21,
			home_world: 'Gaea',
			tactical_ability: 'Amped Cover',
			passive_ability: 'Modded Loader',
			ultimate_ability: 'Emplaced Minigun “Sheila”',
			card_img: rampart,
			full_img: rampart,
			// tractical_ability_img: rampart - one,
			// passive_ability_img: rampart - two,
			// ultimate_ability_img: rampart - three,
		},
		{
			id: 18,
			name: 'REVENANT',
			intro:
				'Revenant used to be human. He used to be the greatest hitman the Mercenary Syndicate ever had. He used to look in the mirror and see his human face looking back. But time changes everything, and when his programming finally failed, he saw what he had become at the hands of the Mercenary Syndicate and Hammond Robotics: a walking nightmare of steel and vestigial flesh. His masters resurrected him as a simulacrum, snatching him from death’s embrace again and again and programming him to forget.',
			tagline:
				'I’ve seen the other side, Skinbag. There is nothing. You are nothing.',
			type: 'Synthetic Nightmare',
			real_name: 'Unknown',
			age: -1,
			home_world: 'Solace',
			tactical_ability: 'Silence',
			passive_ability: 'Stalker',
			ultimate_ability: 'Death Totem',
			card_img: revenant,
			full_img: revenant,
			// tractical_ability_img: revenant - one,
			// passive_ability_img: revenant - two,
			// ultimate_ability_img: revenant - three,
		},
		{
			id: 19,
			name: 'SEER',
			intro:
				'Before his birth, it was foretold that Seer would bring pain and suffering to the world--and the night he was born, a meteor barreled across the sky and struck his world’s moon. It was considered a bad omen, and when the pale blue eyes of Obi Edolasim opened, his community saw a cursed child. His parents did not; they loved him unconditionally because they saw the true empathic, creative soul of their son. They even supported him when he was drawn to the theatricality of the Arenas, where he could express himself fully.',
			tagline: 'If they stare, give them something to see.',
			type: 'Ambush Artist',
			real_name: 'Obi Edolasim',
			age: 26,
			home_world: 'Boreas',
			tactical_ability: 'Focus of Attention',
			passive_ability: 'Heart Seeker',
			ultimate_ability: 'Exhibit',
			card_img: seer,
			full_img: seer,
			// tractical_ability_img: seer - one,
			// passive_ability_img: seer - two,
			// ultimate_ability_img: seer - three,
		},
		{
			id: 20,
			name: 'VALKYRIE',
			intro:
				'Bold, brash, fiery and fierce, Kairi Imahara isn’t above greasing palms and bending the law. When she was a child, she stole a Titan. It belonged to her dad: callsign Viper. She wanted to be just like him when she grew up. But the next day he left on a mission and never returned. In some ways, she still followed in his footsteps: it wasnt a Titan, but her ship offered a decent living. Her personal life, however, was anything but. During the day, she smuggled precious cargo, and at night, went shot for shot with the outlaws and mercs in the bars. But even though she had her ladies, her liquor, and her love of the sky, she was still obsessed with finding the man who’d put her father in harm’s way: his commander, Kuben Blisk.',
			tagline: 'The skies belong to me now.',
			type: 'Winged Avenger',
			real_name: 'Kairi Imahara',
			age: 30,
			home_world: 'Angelia',
			tactical_ability: 'Missile Swarm',
			passive_ability: 'VTOL Jets',
			ultimate_ability: 'Skyward Dive',
			card_img: valkyrie,
			full_img: valkyrie,
			// tractical_ability_img: valkyrie - one,
			// passive_ability_img: valkyrie - two,
			// ultimate_ability_img: valkyrie - three,
		},
		{
			id: 21,
			name: 'VANTAGE',
			intro:
				'Xiomara “Mara” Contreras was born and raised alone on the wild ice planet Págos by her survivalist mother, Xenia. Mara proved gifted with a sniper rifle from the moment she was big enough to look through the scope and reach the trigger at the same time. The tight-lipped Xenia could only get her chatty daughter to stop asking questions by giving her a scavenged copy of Encyclopedia Outlandica, which Mara memorized front to back.When Mara was 18, she discovered the wreck of the G.D.S. Vantage. Against her mother’s wishes, Mara snuck in, only to learn that she had been lied to. Her mother hadn’t grown up on Págos: she was brought there on the G.D.S. Vantage as a prisoner. Disturbed by the intrusion, the ship collapsed into a crevasse, trapping a wounded Mara. Her mother only found her after a baby bat Mara had rescued circled the crevasse holding Mara’s signature whistle. By the time Xenia got to her daughter, the injuries were too severe for her to treat.To save her daughter’s life, Xenia set off the prison ship’s SOS beacon, but was imprisoned once more in return.',
			tagline:
				'Ive been shooting since I was a baby. I was a very dangerous baby.',
			type: 'Sniper Savant',
			real_name: 'Xiomara “Mara” Contreras',
			age: 18,
			home_world: 'Págos',
			tactical_ability: 'Echo Relocation',
			passive_ability: 'Spotters Lens',
			ultimate_ability: 'Snipers Mark',
			card_img: vantage,
			full_img: vantage,
			// tractical_ability_img: vantage - one,
			// passive_ability_img: vantage - two,
			// ultimate_ability_img: vantage - three,
		},
		{
			id: 22,
			name: 'WATTSON',
			intro:
				'Natalie “Wattson” Paquette is a familiar face in the Apex Games, though for a different reason than most. Daughter of the Games’ lead electrical engineer, she studied his manuals to stay close to him, and discovered her calling at a young age. Though she could be completely distracted one moment and hyper-focused the next, electricity grounded her – its ordered, predictable flow made sense in a way the rest of the world didn’t.',
			tagline: 'Power is everything. You only think you have it.',
			type: 'Static Defender',
			real_name: 'Natalie Paquette',
			age: 22,
			home_world: 'Solace',
			tactical_ability: 'Perimeter Security',
			passive_ability: 'Spark of Genius',
			ultimate_ability: 'Interception Pylon',
			card_img: wattson,
			full_img: wattson,
			// tractical_ability_img: wattson - one,
			// passive_ability_img: wattson - two,
			// ultimate_ability_img: wattson - three,
		},
		{
			id: 23,
			name: 'WRAITH',
			intro:
				'Wraith is a whirlwind fighter, able to execute deadly attacks and manipulate spacetime by opening rifts in the fabric of reality — but those abilities came at a price. Years ago, she woke up in an IMC detention facility with no memory of who she was. Senior Science Pilot Renee Blasey, who volunteered as guinea pig for her own experiments... whose partner betrayed her and locked her away… no longer existed. All that was left was a timid girl, frightened by a cacophony of voices in her head, until another version of herself appeared and taught her to listen to the voices. Following her lead, Wraith found the strength to break free from her prison and escape into a different reality - this reality.',
			tagline:
				'There’s a thin line between life and death. You’ll find me there.',
			type: 'Interdimensional Skirmisher',
			real_name: 'Renee Blasey',
			age: 32,
			home_world: 'Typhon',
			tactical_ability: '	Into the Void',
			passive_ability: 'Voices from the Void',
			ultimate_ability: 'Dimensional Rift',
			card_img: wraith,
			full_img: wraith,
			// tractical_ability_img: wraith - one,
			// passive_ability_img: wraith - two,
			// ultimate_ability_img: wraith - three,
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
				{legends.map((obj) => (
					<LegendCard legend={obj} key={obj.id} />
				))}
			</div>
		</div>
	);
}

export default Legends;
