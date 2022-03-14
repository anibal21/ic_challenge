import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../saas/foundation/all.scss'

import RecentActivity from './RecentActivity';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/RecentActivity',
  component: RecentActivity
} as ComponentMeta<typeof RecentActivity>;

const Template: ComponentStory<typeof RecentActivity> = (args) =>
  <RecentActivity {...args} />

export const Common = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Common.args = {

};