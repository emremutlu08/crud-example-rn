import { styled } from 'nativewind';
import { Button, type ButtonProps } from 'react-native-paper';

const StyledButtonElement = styled(Button);

export default function StyledButton(props: ButtonProps): JSX.Element {
  return <StyledButtonElement mode="contained" {...props} />;
}
