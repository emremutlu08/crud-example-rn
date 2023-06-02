import React from 'react';

import { render } from '@testing-library/react-native';

import DrawerContent from './drawer-content';

describe('DrawerContent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<DrawerContent />);

    // Check if the title is rendered correctly
    const title = getByText('CRUD OPERATIONS');
    expect(title).toBeTruthy();

    // Check if the user name is rendered correctly
    const userName = getByText('Emre MUTLU');
    expect(userName).toBeTruthy();

    // Check if the user role is rendered correctly
    const userRole = getByText('Admin');
    expect(userRole).toBeTruthy();

    // Check if the menu items are rendered correctly
    const homeMenuItem = getByText('Home');
    expect(homeMenuItem).toBeTruthy();

    const coursesMenuItem = getByText('Courses');
    expect(coursesMenuItem).toBeTruthy();

    const studentsMenuItem = getByText('Students');
    expect(studentsMenuItem).toBeTruthy();

    const paymentsMenuItem = getByText('Payments');
    expect(paymentsMenuItem).toBeTruthy();

    const reportsMenuItem = getByText('Reports');
    expect(reportsMenuItem).toBeTruthy();

    const settingsMenuItem = getByText('Settings');
    expect(settingsMenuItem).toBeTruthy();

    // Check if the logout button is rendered correctly
    const logoutButton = getByText('Logout');
    expect(logoutButton).toBeTruthy();
  });

  // Add more test cases as needed
});
