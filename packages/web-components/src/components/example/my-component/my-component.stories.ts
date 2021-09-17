// Dependencies
import { html } from 'lit-html'
import { Story } from '@storybook/web-components'

export default {
  title: 'Example/my-component',
  argTypes: {
    first: { control: 'text', description: 'First name' },
    middle: { control: 'text', description: 'Middle name' },
    last: { control: 'text', description: 'Last name' },
  },
}

const Template: Story = (args) => html`
  <div>
    <my-component .first=${args.first} .middle=${args.middle} .last=${args.last} />
  </div>
`

export const Default: Story = Template.bind({})
Default.storyName = 'default'
Default.args = {
  first: 'Alexia',
  middle: 'A.',
  last: 'Greene',
}

export const FirstAndLast: Story = Template.bind({})
FirstAndLast.storyName = 'First and last'
FirstAndLast.args = {
  first: 'John',
  last: 'Doe',
}
