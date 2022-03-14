import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BadgeClassificationStyle } from '../../../utils/enums/enums';
import './../../../saas/foundation/all.scss'

import Card from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Common = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Common.args = {
    avatar: 'https://www.adoptapet.com/blog/uploads/2013/01/Mango-cat-collar.jpg',
    ratio: 12,
  classification: BadgeClassificationStyle.BLUE,
  cardTitle: 'Zaydan Nicholson',
  cardSubtitle: `Last Activity: 2020-02-20`,
  cardDetail: 'Unique Opponents: 5'
};