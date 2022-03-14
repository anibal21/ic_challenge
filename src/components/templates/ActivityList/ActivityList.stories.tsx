import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BadgeClassificationStyle } from '../../../utils/enums/enums';
import './../../../saas/foundation/all.scss'

import ActivityList from './ActivityList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/ActivityList',
  component: ActivityList
} as ComponentMeta<typeof ActivityList>;

const Template: ComponentStory<typeof ActivityList> = (args) =>
  <ActivityList {...args} />

export const Common = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Common.args = {
  loading: true,
  userActivityList: [
    {
      imageUrl: 'https://www.adoptapet.com/blog/uploads/2013/01/Mango-cat-collar.jpg',
      userName: 'Alivia Gaines',
      userLastActivity: '2020-10-20',
      userUniqueOpponents: 5,
      ratio: 0.6
    },
    {
      imageUrl: 'https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?resize=1320%2C1320&ssl=1',
      userName: 'Mahir Ortiz',
      userLastActivity: '2020-09-10',
      userUniqueOpponents: 5,
      ratio: 0.8
    },    
    {
      imageUrl: 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ffansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2019%2F05%2F529020720.jpeg',
      userName: 'Demi Warren',
      userLastActivity: '2020-08-02',
      userUniqueOpponents: 8,
      ratio: 0
    },
    {
      imageUrl: 'https://www.adoptapet.com/blog/uploads/2013/01/Mango-cat-collar.jpg',
      userName: 'Zephanian Easton',
      userLastActivity: '2020-08-01',
      ratio: 0.6
    },
    {
      imageUrl: 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ffansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2019%2F05%2F529020720.jpeg',
      userName: 'Jhon Hogan',
      userLastActivity: '2020-04-01',
      userUniqueOpponents: 22,
      ratio: 0.2
    }    
  ]
};