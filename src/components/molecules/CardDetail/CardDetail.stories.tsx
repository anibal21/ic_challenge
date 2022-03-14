import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../saas/foundation/all.scss'

import CardDetail from './CardDetail';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/CardDetail',
  component: CardDetail
} as ComponentMeta<typeof CardDetail>;

const Template: ComponentStory<typeof CardDetail> = (args) => <CardDetail {...args} />;

export const Common = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Common.args = {
  title: 'Zaydan Nicholson',
  subtitle: `Last Activity: 2020-02-20`,
  detail: 'Unique Opponents: 5'
};