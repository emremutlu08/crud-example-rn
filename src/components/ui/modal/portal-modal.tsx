import * as React from 'react';

import { type ViewStyle } from 'react-native';
import { Modal, Portal, type ModalProps } from 'react-native-paper';

interface PortalModalProps extends ModalProps {
  isLeftDrawer?: boolean;
}

export default function PortalModal(props: PortalModalProps): JSX.Element {
  const { children, onDismiss, visible, isLeftDrawer = false } = props;
  let containerStyle: ViewStyle = {
    backgroundColor: 'white',
  };

  if (isLeftDrawer) {
    containerStyle = {
      backgroundColor: '#F2EAE1',
      width: '80%',
      flex: 1,
      justifyContent: 'flex-start',
      padding: 20,
    };
  }

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
          {children}
        </Modal>
      </Portal>
    </>
  );
}
