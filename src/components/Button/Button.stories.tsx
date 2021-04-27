/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './Button'

const Template: Story<ButtonProps> = ({ ...args }) => <Button {...args} />

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    content: {
      description: 'Content',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const SmallLink = Template.bind({})

SmallLink.args = {
  content: 'Example',
}
