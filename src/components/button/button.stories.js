import React from 'react';
import button from './button';

export default {
	title: 'Button',
	component: button
}

export const Primary = () => <button variant='primary'>Primary</button>
export const Secondary = () => <button variant='secondary'>Secondary</button>
export const Success = () => <button variant='success'>Success</button>
export const Danger = () => <button variant='danger'>Danger</button>