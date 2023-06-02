import { styled } from 'nativewind';
import { TextInput, type TextInputProps } from 'react-native-paper';

const StyledTextInput = styled(TextInput);

export default function StyledInput(props: TextInputProps): JSX.Element {
  return <StyledTextInput className="w-2/3 mx-2" mode="outlined" {...props} />;
}
