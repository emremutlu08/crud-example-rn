import { Formik } from 'formik';
import * as yup from 'yup'; // Import yup for validation

import { SimpleCrudService, type UserModel } from '../../../generated';
import { toast } from '../../helpers/toast';
import { type IModalInfo } from '../../types/modal';
import StyledButton from '../ui/button/styled-button';
import StyledInput from '../ui/input/styled-input';

interface IStudentInfoFormProps extends IModalInfo {
  onSubmit: () => void;
}

export default function StudentInfoForm(props: IStudentInfoFormProps): JSX.Element {
  const { mode, user, onSubmit } = props;

  if (mode !== 'edit' && mode !== 'add') {
    return <></>;
  }

  let initialFormValues = {
    name: '',
    age: '0',
    hometown: '',
  };

  if (mode === 'edit' && user != null) {
    initialFormValues = {
      name: user.name,
      age: String(user.age),
      hometown: user.hometown,
    };
  }

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    age: yup.number().required('Age is required').positive('Age must be a positive number'),
    hometown: yup.string().required('Hometown is required'),
  });

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const sendableValues: UserModel = { ...values, age: Number(values.age) };
        (async () => {
          if (mode === 'edit' && user?.key !== undefined) {
            await SimpleCrudService.updateUserUsersUserKeyPatch(user.key, sendableValues);
          } else if (mode === 'add') {
            await SimpleCrudService.createUserUsersPost(sendableValues);
          }
          toast('Completed!');
          onSubmit();
        })().catch((err) => {
          console.error(err, 'err');
          toast('An error occurred. Please try again.');
        });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched }) => {
        return (
          <>
            <StyledInput
              label="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              error={touched?.name}
            />
            <StyledInput
              label="Age"
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              keyboardType="numeric"
              error={touched?.age}
            />
            <StyledInput
              label="Hometown"
              onChangeText={handleChange('hometown')}
              onBlur={handleBlur('hometown')}
              value={values.hometown}
              error={touched?.hometown}
            />

            <StyledButton
              className="flex flex-row items-center justify-between bg-green-600 rounded-md mt-2"
              onPress={() => {
                handleSubmit();
              }}
            >
              SUBMIT
            </StyledButton>
          </>
        );
      }}
    </Formik>
  );
}
