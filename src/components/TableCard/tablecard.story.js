import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import TableCard from './tablecard'

const props = {
  title: 'My Cool Component',
};

const story = storiesOf('tablecard', module)

story.add('tablecard Component', () => <TableCard {...props} />);
