import React from 'react';
import { useParams } from 'react-router-dom';

function Legend() {
	var parm = useParams();
	return (
		<div>
			<h1>legends are here! {parm.id}</h1>
			<h1>legends are here! {parm.id}</h1>
			<h1>legends are here! {parm.id}</h1>
		</div>
	);
}

export default Legend;
