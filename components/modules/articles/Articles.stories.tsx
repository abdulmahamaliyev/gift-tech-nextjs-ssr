import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import Articles, { IArticles } from './Articles';
import { mockArticlesProps } from './Articles.mocks';
// import { withNextRouter } from 'storybook-addon-next-router';

export default {
  title: 'templates/Articles',
  component: Articles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  // decorators: [withNextRouter, (Story: Story) => <Story />],
} as ComponentMeta<typeof Articles>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Articles> = (args) => (
  <Articles {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockArticlesProps.base,
} as IArticles;

Base.parameters = {
  nextRouter: {
    path: '/articles/[id]',
    asPath: '/articles',

    // query: {
    //   page: '1',
    // },
  },
};
