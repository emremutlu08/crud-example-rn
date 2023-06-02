import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';

import AppComponent from './src/components/app';

export default function App(): JSX.Element {
  return (
    <PaperProvider>
      <AppComponent />
      <StatusBar hidden />
    </PaperProvider>
  );
}
