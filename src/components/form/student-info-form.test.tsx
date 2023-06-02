import React from 'react';

import { render } from '@testing-library/react-native';

import StudentInfoForm from './student-info-form';

jest.useFakeTimers();

describe('StudentInfoForm', () => {
  it('renders correctly in edit mode', async () => {
    // Arrange
    const mockOnSubmit = jest.fn();
    const mockUser = {
      name: 'test-name',
      age: 1,
      hometown: 'test-hometown',
      key: 'test',
    };
    const mockMode = 'edit';

    // Act
    // It should get elements on the screen
    const { getByDisplayValue } = render(
      <StudentInfoForm user={mockUser} mode={mockMode} onSubmit={mockOnSubmit} />
    );

    // Check if the name input is rendered correctly
    const nameInput = getByDisplayValue('test-name');
    expect(nameInput).toBeTruthy();

    // Check if the age input is rendered correctly
    const ageInput = getByDisplayValue('1');
    expect(ageInput).toBeTruthy();

    // Check if the hometown input is rendered correctly
    const hometownInput = getByDisplayValue('test-hometown');
    expect(hometownInput).toBeTruthy();
  });
});
