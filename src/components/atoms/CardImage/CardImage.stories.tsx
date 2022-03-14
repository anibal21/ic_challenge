import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../saas/foundation/all.scss'

import CardImage from './CardImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/CardImage',
    component: CardImage
} as ComponentMeta<typeof CardImage>;

const Template: ComponentStory<typeof CardImage> = (args) => <CardImage {...args} />;

export const Common = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Common.args = {
  src: 'https://www.adoptapet.com/blog/uploads/2013/01/Mango-cat-collar.jpg'
};