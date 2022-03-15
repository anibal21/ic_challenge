import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../saas/foundation/all.scss'

import DialogMessage from './DialogMessage';
import { SeverityStyle } from '../../../utils/enums/SeverityStyle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DialogMessage',
  component: DialogMessage
} as ComponentMeta<typeof DialogMessage>;

const Template: ComponentStory<typeof DialogMessage> = (args) => <DialogMessage {...args} />;

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  text: 'Network Error',
  severity: SeverityStyle.ERROR,
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  text: 'The user you choosed is offline',
  severity: SeverityStyle.WARNING,
};

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  text: 'User entered the channel',
  severity: SeverityStyle.INFO,
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  text: 'Data loaded successfully',
  severity: SeverityStyle.SUCCESS,
};

