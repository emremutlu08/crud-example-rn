import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import { PaperProvider } from 'react-native-paper';

import StudentList from './student-list';
jest.useFakeTimers();

// student-list.test.tsx
// import * as React from 'react';

// import { styled } from 'nativewind';
// import { View } from 'react-native';
// import { DataTable, IconButton, Divider, Text } from 'react-native-paper';

// import { SimpleCrudService, type UserResponseModel } from '../../../generated';
// import { type IModalInfo } from '../../types/modal';
// import AreYouSureDialog from '../dialog/are-you-sure-dialog';
// import StudentInfoForm from '../form/student-info-form';
// import StyledButton from '../ui/button/styled-button';
// import PortalModal from '../ui/modal/portal-modal';
// const StyledCell = styled(DataTable.Cell);
// const StyledRow = styled(DataTable.Row);
// const StyledDivider = styled(Divider);
// const StyledIconButton = styled(IconButton);

// export default function StudentList(): JSX.Element {
//   const [users, setUsers] = React.useState<UserResponseModel[]>([]);
//   const [modalInfo, setModalInfo] = React.useState<IModalInfo>({
//     mode: 'closed',
//   });

//   const showModal = ({ mode, user }: IModalInfo): void => {
//     setModalInfo({ mode, user });
//   };
//   const hideModal = (): void => {
//     setModalInfo({ mode: 'closed' });
//     fetchUsers().catch((error) => {
//       console.error(error, 'error');
//     });
//   };

//   const fetchUsers = async (): Promise<void> => {
//     try {
//       const response = await SimpleCrudService.listUsersUsersGet();
//       // [
//       //   {"age": 7, "hometown": "gcg", "key": "user:1e435132-c0be-4164-9b5d-fe48a28039a3", "name": "tffhu"},
//       //   {"age": 55, "hometown": "vuuvu", "key": "user:2ebebcdb-4d6c-4a37-9f52-8b72238bda67", "name": "yguu"}, {"age": 19, "hometown": "İzmir", "key": "user:52bcaa6a-1d81-46f4-99e8-2b07c0bf059f", "name": "Fatma"}, {"age": 33, "hometown": "Chekoslovaki", "key": "user:6014c153-3a88-4ad7-b5f8-064895ab35a9", "name": "Behzad"}, {"age": 4, "hometown": "df", "key": "user:872dcd79-bb92-49c5-8094-bc1e68306f64", "name": "7f6f"}, {"age": 21, "hometown": "Adana", "key": "user:8cf70645-726a-4fbf-9006-58c7db587304", "name": "Mehmet"}, {"age": 24, "hometown": "Adana", "key": "user:8dabea99-5326-4a77-9a58-c7507fa21b99", "name": "Emrah"}, {"age": 28, "hometown": "Zonguldak", "key": "user:97c27ca5-6570-4376-9a27-eecd6f76e790", "name": "Nurallah"}
//       // ]
//       console.log(response, 'response');
//       console.log(typeof response, 'typeof response');
//       setUsers(response);
//     } catch (error) {
//       console.error(error, 'error');
//     }
//   };

//   React.useEffect(() => {
//     console.log('useEffect');
//     fetchUsers().catch((error) => {
//       console.error(error, 'error');
//     });
//   }, []);

//   const generateRows = (): JSX.Element[] => {
//     return users.map((user) => {
//       return (
//         <StyledRow key={user.key} className="bg-white my-1 rounded-lg">
//           <StyledCell>{user.name}</StyledCell>
//           <StyledCell>{user.age}</StyledCell>
//           <StyledCell>{user.hometown}</StyledCell>
//           <StyledCell className="flex flex-row justify-end items-center">
//             <StyledIconButton
//               testID="edit-button"
//               icon="pencil"
//               size={18}
//               iconColor="#FEAF00"
//               onPress={() => {
//                 showModal({ mode: 'edit', user });
//               }}
//             />
//             <StyledIconButton
//               testID="delete-button"
//               icon="trash-can"
//               size={18}
//               iconColor="#FEAF00"
//               onPress={() => {
//                 showModal({ mode: 'delete', user });
//               }}
//             />
//           </StyledCell>
//         </StyledRow>
//       );
//     });
//   };

//   return (
//     <>
//       <View className="flex flex-row items-center justify-between w-full p-4">
//         <PortalModal visible={modalInfo.mode !== 'closed'} onDismiss={hideModal}>
//           <View className="items-center justify-center bg-white my-10 gap-2">
//             <Text>Portal Modal</Text>

//             <StudentInfoForm {...modalInfo} onSubmit={hideModal} />
//             <AreYouSureDialog {...modalInfo} onSubmit={hideModal} />
//           </View>
//         </PortalModal>
//         <Text variant="titleLarge">Students List</Text>
//         <StyledButton
//           className="flex flex-row items-center justify-between bg-yellow-500  rounded-md"
//           onPress={() => {
//             showModal({ mode: 'add' });
//           }}
//           mode="contained"
//         >
//           ADD NEW STUDENT
//         </StyledButton>
//       </View>
//       <StyledDivider className="w-full" />
//       <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>Name</DataTable.Title>
//           <DataTable.Title>Age</DataTable.Title>
//           <DataTable.Title>Hometown</DataTable.Title>
//           <DataTable.Title> </DataTable.Title>
//         </DataTable.Header>

//         {generateRows()}
//       </DataTable>
//     </>
//   );
// }

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
