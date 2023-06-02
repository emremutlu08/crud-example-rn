import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import { PaperProvider } from 'react-native-paper';

import StudentList from './student-list';
jest.useFakeTimers();

const PaperProvidedStudentList = (): JSX.Element => (
  <PaperProvider>
    <StudentList />
  </PaperProvider>
);

describe('StudentList', () => {
  it('renders correctly', () => {
    const { getByText } = render(<PaperProvidedStudentList />);
    const title = getByText('Students List');
    expect(title).toBeTruthy();
  });

  it('opens modal on add button press', () => {
    const { getByText } = render(<PaperProvidedStudentList />);
    const addButton = getByText('ADD NEW STUDENT');
    fireEvent.press(addButton);

    const modalContent = getByText('Portal Modal');
    expect(modalContent).toBeTruthy();
  });
});
