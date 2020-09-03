import React from 'react';
import Input from './Input';
import Center from '../Center/Center';

export default {
	title: 'Input',
	component: Input,
	decorators: [story => <Center>{story()}</Center>]
}

export const Small = () => <Input variant='small' />
export const Medium = () => <Input variant='medium' />
export const Large = () => <Input variant='large' />
export const Standard = () => <Input variant='standard' />