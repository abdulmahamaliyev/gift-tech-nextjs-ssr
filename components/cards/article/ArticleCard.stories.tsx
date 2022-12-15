import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleCard, { IArticleCard } from './ArticleCard';
import { mockArticleCardProps } from './ArticleCard.mocks';

export default {
  name: 'Base',
  title: 'templates/ArticleCard',
  component: ArticleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
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

// Base.name = 'templates-articlecard--base';
