import React from 'react'
import { Button } from '@chakra-ui/core'

export default {
	title: 'Chakra/Button',
	component: Button,
	argTypes: {
		backgroundColor: {
			control: 'color'
		},
		children: {
			control: 'text'
		}
	}
}

const Template = args => <Button {...args} />
export const Success = Template.bind({})
Success.args = {
	variantColor: 'green',
	children: 'success'
}

export const Danger = Template.bind({})
Danger.args = {
	variantColor: 'red',
	children: 'success'
}