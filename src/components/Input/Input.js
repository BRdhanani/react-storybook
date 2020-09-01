import React from 'react';
import './Input.css';

export default function Input(props){
	const { variant = 'standard', ...rest} = props;
	return (
		<Input className={`${'input'} ${variant}`} {...rest} />
	)
}