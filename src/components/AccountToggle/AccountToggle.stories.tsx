/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Story, Meta } from '@storybook/react/types-6-0'
import { AccountToggle, AccountToggleProps } from './AccountToggle'
import { Box } from '../Box'

const Template: Story<AccountToggleProps> = (args) => (
  <Box>
    <AccountToggle {...args} />
  </Box>
)

export default {
  title: 'AccountToggle',
  component: AccountToggle,
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
    name: {
      description: 'Name',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    avaSrc: {
      description: 'avaSrc',
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

export const Basic = Template.bind({})
Basic.args = {
  name: 'Pavel',
  userId: '@Pavel28665992',
}

export const WithAva = Template.bind({})
WithAva.args = {
  name: 'Pavel',
  userId: '@Pavel28665992',
  avaSrc:
    'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
}
