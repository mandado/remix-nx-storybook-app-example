import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input';

export default {
  component: Input,
  title: 'Input',
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
