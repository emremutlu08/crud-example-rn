import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { SimpleCrudService } from '../../../generated';
import { toast } from '../../helpers/toast';
import { type IModalInfo } from '../../types/modal';
import StyledButton from '../ui/button/styled-button';

interface IAreYouSureDialogProps extends IModalInfo {
  onSubmit: () => void;
}

export default function AreYouSureDialog(props: IAreYouSureDialogProps): JSX.Element {
  const { mode, user, onSubmit } = props;

  if (mode !== 'delete' || user == null) {
    return <></>;
  }

  const handleDelete = async (): Promise<void> => {
    if (user?.key !== undefined) {
      await SimpleCrudService.deleteUserUsersUserKeyDelete(user.key);
    }

    toast('Completed!');
    onSubmit();
  };

  return (
    <View>
      <Text>You are deleting {user.name}`s information.</Text>
      <Text>Are you sure?</Text>
      <StyledButton
        className="bg-green-600 rounded-md mt-2"
        onPress={() => {
          (async () => {
            await handleDelete();
          })().catch((err) => {
            console.error(err, 'err');
          });
        }}
      >
        Yes
      </StyledButton>
    </View>
  );
}
