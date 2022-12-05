import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Heading.stories';

const { Default } = composeStories(stories);

test('render component with default args and children', () => {
  render(<Default>Heading</Default>);
  const buttonElement = screen.getByText(/Heading/i);
  expect(buttonElement).not.toBeNull();
});
