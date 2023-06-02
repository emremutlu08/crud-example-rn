import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import Button from './styled-button';

describe('Button', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Button testID="my-button">Press me</Button>);

    const buttonContainer = getByTestId('my-button-container');
    const buttonText = getByTestId('my-button-text');

    expect(buttonContainer).toBeDefined();
    expect(buttonText).toBeDefined();
    expect(buttonText.props.children).toBe('Press me');
  });

  test('calls onPress callback when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button testID="my-button" onPress={onPressMock}>
        Press me
      </Button>
    );

    const buttonContainer = getByTestId('my-button-container');

    fireEvent.press(buttonContainer);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
