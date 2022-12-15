import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Article Cards', module);

stories.add('Welcome', () => (
  <div>
    <h1>Article Cards</h1>

    <p>
      Welcome to the <strong>Article Cards</strong> docs.
    </p>
  </div>
));
