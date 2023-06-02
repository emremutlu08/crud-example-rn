import React from 'react';

import { render } from '@testing-library/react-native';

import StudentInfoForm from './student-info-form';

jest.useFakeTimers();
// student-info-form.tsx
// import { Formik } from 'formik';

// import { SimpleCrudService, type UserModel } from '../../../generated';
// import { toast } from '../../helpers/toast';
// import { type IModalInfo } from '../../types/modal';
// import StyledButton from '../ui/button/styled-button';
// import StyledInput from '../ui/input/styled-input';

// interface IStudentInfoFormProps extends IModalInfo {
//   onSubmit: () => void;
// }

// export default function StudentInfoForm(props: IStudentInfoFormProps): JSX.Element {
//   const { mode, user, onSubmit } = props;

//   if (mode !== 'edit' && mode !== 'add') {
//     return <></>;
//   }

//   let initialFormValues = {
//     name: '',
//     age: '0',
//     hometown: '',
//   };

//   if (mode === 'edit' && user != null) {
//     initialFormValues = {
//       name: user.name,
//       age: String(user.age),
//       hometown: user.hometown,
//     };
//   }

//   return (
//     <Formik
//       initialValues={initialFormValues}
//       onSubmit={(values) => {
//         const sendableValues: UserModel = { ...values, age: Number(values.age) };
//         (async () => {
//           if (mode === 'edit' && user?.key !== undefined) {
//             await SimpleCrudService.updateUserUsersUserKeyPatch(user.key, sendableValues);
//           } else if (mode === 'add') {
//             await SimpleCrudService.createUserUsersPost(sendableValues);
//           }
//           toast('Completed!');
//           onSubmit();
//         })().catch((err) => {
//           console.log(err, 'err');
//         });
//         console.log(values, 'values');
//       }}
//     >
//       {({ handleChange, handleBlur, handleSubmit, values }) => {
//         return (
//           <>
//             <StyledInput
//               label="Name"
//               onChangeText={handleChange('name')}
//               onBlur={handleBlur('name')}
//               value={values.name}
//             />
//             <StyledInput
//               label="Age"
//               onChangeText={handleChange('age')}
//               onBlur={handleBlur('age')}
//               value={values.age}
//               keyboardType="numeric"
//             />
//             <StyledInput
//               label="Hometown"
//               onChangeText={handleChange('hometown')}
//               onBlur={handleBlur('hometown')}
//               value={values.hometown}
//             />

//             <StyledButton
//               className="flex flex-row items-center justify-between bg-green-600  rounded-md mt-2"
//               onPress={() => {
//                 handleSubmit();
//               }}
//             >
//               SUBMIT
//             </StyledButton>
//           </>
//         );
//       }}
//     </Formik>
//   );
// }

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
