import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  size: 'md'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Medium Size'
}

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Large Size',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Small Size',
};
