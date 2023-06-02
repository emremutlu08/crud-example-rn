import { useState } from 'react';

import { Appbar } from 'react-native-paper';

import DrawerContent from './drawer-content';
import PortalModal from '../ui/modal/portal-modal';

export default function AppBar(): JSX.Element {
  const [visible, setVisible] = useState(false);

  const showModal = (): void => {
    setVisible(true);
  };
  const hideModal = (): void => {
    setVisible(false);
  };

  return (
    <>
      <PortalModal visible={visible} onDismiss={hideModal} isLeftDrawer>
        <DrawerContent />
      </PortalModal>
      <Appbar.Header>
        <Appbar.Action icon="forwardburger" onPress={showModal} />

        <Appbar.Content title="" />
        <Appbar.Action icon="bell" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
}
