import React from 'react';
import './button.css';

export default function button(props){
	const { variant = 'primary', children, ...rest} = props;
	return (
		<button className={`${'button'} ${variant}`} {...rest}>
			{children}
		</button>
	)
}