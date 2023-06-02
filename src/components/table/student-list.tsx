import { useState, useEffect } from 'react';

import { styled } from 'nativewind';
import { View } from 'react-native';
import { DataTable, IconButton, Divider, Text } from 'react-native-paper';

import { SimpleCrudService, type UserResponseModel } from '../../../generated';
import { type IModalInfo } from '../../types/modal';
import AreYouSureDialog from '../dialog/are-you-sure-dialog';
import StudentInfoForm from '../form/student-info-form';
import StyledButton from '../ui/button/styled-button';
import PortalModal from '../ui/modal/portal-modal';
const StyledCell = styled(DataTable.Cell);
const StyledRow = styled(DataTable.Row);
const StyledDivider = styled(Divider);
const StyledIconButton = styled(IconButton);

export default function StudentList(): JSX.Element {
  const [users, setUsers] = useState<UserResponseModel[]>([]);
  const [modalInfo, setModalInfo] = useState<IModalInfo>({
    mode: 'closed',
  });

  const showModal = ({ mode, user }: IModalInfo): void => {
    setModalInfo({ mode, user });
  };
  const hideModal = (): void => {
    setModalInfo({ mode: 'closed' });
    fetchUsers().catch((error) => {
      console.error(error, 'error');
    });
  };

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await SimpleCrudService.listUsersUsersGet();
      setUsers(response);
    } catch (error) {
      console.error(error, 'error');
    }
  };

  useEffect(() => {
    fetchUsers().catch((error) => {
      console.error(error, 'error');
    });
  }, []);

  const generateRows = (): JSX.Element[] => {
    return users.map((user) => {
      return (
        <StyledRow key={user.key} className="bg-white my-1 rounded-lg">
          <StyledCell>{user.name}</StyledCell>
          <StyledCell>{user.age}</StyledCell>
          <StyledCell>{user.hometown}</StyledCell>
          <StyledCell className="flex flex-row justify-end items-center">
            <StyledIconButton
              icon="pencil"
              size={18}
              iconColor="#FEAF00"
              onPress={() => {
                showModal({ mode: 'edit', user });
              }}
            />
            <StyledIconButton
              icon="trash-can"
              size={18}
              iconColor="#FEAF00"
              onPress={() => {
                showModal({ mode: 'delete', user });
              }}
            />
          </StyledCell>
        </StyledRow>
      );
    });
  };

  return (
    <>
      <View className="flex flex-row items-center justify-between w-full p-4">
        <PortalModal visible={modalInfo.mode !== 'closed'} onDismiss={hideModal}>
          <View className="items-center justify-center bg-white my-10 gap-2">
            <Text>Portal Modal</Text>

            <StudentInfoForm {...modalInfo} onSubmit={hideModal} />
            <AreYouSureDialog {...modalInfo} onSubmit={hideModal} />
          </View>
        </PortalModal>
        <Text variant="titleLarge">Students List</Text>
        <StyledButton
          className="flex flex-row items-center justify-between bg-yellow-500  rounded-md"
          onPress={() => {
            showModal({ mode: 'add' });
          }}
          mode="contained"
        >
          ADD NEW STUDENT
        </StyledButton>
      </View>
      <StyledDivider className="w-full" />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Age</DataTable.Title>
          <DataTable.Title>Hometown</DataTable.Title>
          <DataTable.Title> </DataTable.Title>
        </DataTable.Header>

        {generateRows()}
      </DataTable>
    </>
  );
}
