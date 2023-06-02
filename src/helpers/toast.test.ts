import { ToastAndroid } from 'react-native';

import { toast } from './toast';

jest.mock('react-native', () => ({
  ToastAndroid: {
    showWithGravity: jest.fn(),
    LONG: 1,
    BOTTOM: 2,
  },
}));

describe('toast', () => {
  it('calls ToastAndroid.showWithGravity with the correct parameters', () => {
    const message = 'Test message';
    toast(message);
    expect(ToastAndroid.showWithGravity).toHaveBeenCalledWith(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
  });
});
