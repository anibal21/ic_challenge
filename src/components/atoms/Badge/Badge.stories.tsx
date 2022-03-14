import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BadgeClassificationStyle } from '../../../utils/enums/enums';
import './../../../saas/foundation/all.scss'

import Badge from './Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Badge',
    component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Red.args = {
  number: 10,
  classification: BadgeClassificationStyle.RED,
};

export const Yellow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Yellow.args = {
  number: 10,
  classification: BadgeClassificationStyle.YELLOW,
};

export const Green = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Green.args = {
  number: 10,
  classification: BadgeClassificationStyle.GREEN,
};

export const Blue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blue.args = {
  number: 10,
  classification: BadgeClassificationStyle.BLUE,
};

