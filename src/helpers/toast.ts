import { ToastAndroid } from 'react-native';

export const toast = (message: string): void => {
  ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
};
