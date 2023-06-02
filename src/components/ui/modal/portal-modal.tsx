import * as React from 'react';

import { Modal, Portal, type ModalProps } from 'react-native-paper';

interface PortalModalProps extends ModalProps {
  isLeftDrawer?: boolean;
}

export default function PortalModal(props: PortalModalProps): JSX.Element {
  const { children, onDismiss, visible, isLeftDrawer = false } = props;
  let containerStyle: {
    backgroundColor: string;
    width?: string;
    flex?: number;
  } = {
    backgroundColor: 'white',
  };

  if (isLeftDrawer) {
    containerStyle = {
      backgroundColor: 'white',
      width: '80%',
      flex: 1,
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
