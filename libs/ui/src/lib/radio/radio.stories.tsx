import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './radio';

export default {
  component: Radio,
  title: 'Radio',
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
