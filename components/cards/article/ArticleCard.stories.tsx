import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import ArticleCard, { IArticleCard } from './ArticleCard';
import { mockArticleCardProps } from './ArticleCard.mocks';
// import { withNextRouter } from 'storybook-addon-next-router';

export default {
  title: 'templates/ArticleCard',
  component: ArticleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  // decorators: [withNextRouter, (Story: Story) => <Story />],
} as ComponentMeta<typeof ArticleCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockArticleCardProps.base,
} as IArticleCard;

Base.parameters = {
  nextRouter: {
    path: '/articles/[id]',
    asPath: '/articles',

    // query: {
    //   page: '1',
    // },
  },
};
