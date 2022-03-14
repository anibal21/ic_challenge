import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../saas/foundation/all.scss'

import Header from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Common = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Common.args = {
  title: 'Recent Activity',
};