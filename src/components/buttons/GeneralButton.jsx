import React from 'react';
import classes from './GeneralButton.module.css';

function GeneralButton(props) {
	return <button className={classes.general_button}>{props.content}</button>;
}

export default GeneralButton;
