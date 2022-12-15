import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import ArticleDetail, { IArticleDetail } from './ArticleDetail';
import { mockArticleDetailProps } from './ArticleDetail.mocks';
// import { withNextRouter } from 'storybook-addon-next-router';

export default {
  title: 'templates/ArticleDetail',
  component: ArticleDetail,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  // decorators: [withNextRouter, (Story: Story) => <Story />],
} as ComponentMeta<typeof ArticleDetail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleDetail> = (args) => (
  <ArticleDetail {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockArticleDetailProps.base,
} as IArticleDetail;

Base.parameters = {
  nextRouter: {
    path: '/articles/[id]',
    asPath: '/articles',

    // query: {
    //   page: '1',
    // },
  },
};
