import { View } from 'react-native';

import AppBar from './header/appbar';
import StudentList from './table/student-list';

export default function AppComponent(): JSX.Element {
  return (
    <>
      <AppBar />
      <View className="flex-1 items-center justify-center bg-gray-50 h-full">
        <StudentList />
      </View>
    </>
  );
}
