import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from './Container';

export default {
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {};
