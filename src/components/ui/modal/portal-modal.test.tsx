import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import { PaperProvider, Text } from 'react-native-paper';

import PortalModal from './portal-modal';
jest.useFakeTimers();

describe('PortalModal', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <PaperProvider>
        <PortalModal visible onDismiss={() => {}}>
          <Text>Test Modal Content</Text>
        </PortalModal>
      </PaperProvider>
    );

    const modalContent = getByText('Test Modal Content');
    expect(modalContent).toBeTruthy();
  });

  it('calls onDismiss when modal is dismissed', () => {
    const onDismissMock = jest.fn();

    const { getByTestId } = render(
      <PaperProvider>
        <PortalModal visible onDismiss={onDismissMock}>
          <Text>Test Modal Content</Text>
        </PortalModal>
      </PaperProvider>
    );

    const modal = getByTestId('modal');
    fireEvent(modal, 'dismiss');

    expect(onDismissMock).toHaveBeenCalledTimes(1);
  });
});
