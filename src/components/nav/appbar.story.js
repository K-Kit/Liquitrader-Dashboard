import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import AppBar from './appbar'

const props = {
  title: 'My Cool Component',
};

const story = storiesOf('Components|Header', module)

story.add('Header Component', () => <AppBar {...props} />);
