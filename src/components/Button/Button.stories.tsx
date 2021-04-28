/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from './Button'

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
