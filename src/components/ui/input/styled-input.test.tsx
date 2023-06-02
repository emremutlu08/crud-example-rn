import React from 'react';

import { render } from '@testing-library/react-native';

import StyledInput from './styled-input';

jest.useFakeTimers();

describe('StyledInput', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<StyledInput testID="my-styled-input" />);

    const styledInput = getByTestId('my-styled-input');

    expect(styledInput).toBeDefined();
  });

  test('renders correctly with props', () => {
    const { getByTestId } = render(
      <StyledInput testID="my-styled-input" placeholder="My placeholder" />
    );

    const styledInput = getByTestId('my-styled-input');

    expect(styledInput).toBeDefined();
  });
});
