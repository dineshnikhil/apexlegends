import React from 'react';
import LegendCard from '../legends/LegendCard';
import { legends } from './legends';

import classes from './Suggestions.module.css';

function Suggestions() {
	function generate_random_number(range) {
		var random_num = Math.floor(Math.random() * range + 1);
		return random_num;
	}

	function generate_random_num_array() {
		var arry_num = [];
		for (let i = 0; i < 3; i++) {
			var ran_num = generate_random_number(23);
			if (!arry_num.includes(ran_num)) {
				arry_num.push(ran_num);
			}
		}

		return arry_num;
	}

	function fillter_legends(id) {
		var filltered_legend = legends.filter((legend) => {
			return legend.id === id;
		});

		return filltered_legend;
	}

	function suggest_legends() {
		var ran_num_arr = generate_random_num_array();
		var legends_arr = [];
		for (let i = 0; i < ran_num_arr.length; i++) {
			var legend_arr_res = fillter_legends(ran_num_arr[i]);
			legends_arr.push(legend_arr_res[0]);
		}
		console.log(legends_arr);
		return legends_arr;
	}

	var suggested_legends_array = suggest_legends();

	return (
		<div className={classes.random_suggestion_legends}>
			{suggested_legends_array.map((obj) => (
				<LegendCard legend={obj} is_hide={false} key={obj.id} />
			))}
		</div>
	);
}

export default Suggestions;
