import React from 'react';
import './Input.css';

export default function Input(props){
	const { variant = 'standard', ...rest} = props;
	return (
		<input className={`${'input'} ${variant}`} {...rest} />
	)
}