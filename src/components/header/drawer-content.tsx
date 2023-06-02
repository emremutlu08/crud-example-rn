import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

import StyledButton from '../ui/button/styled-button';

export default function DrawerContent(): JSX.Element {
  return (
    <View className="items-center gap-8">
      {/* TITLE */}
      <View className="border-l-4 border-yellow-500	gap-1">
        <Text variant="headlineMedium">CRUD OPERATIONS</Text>
      </View>

      <View className="gap-y-2">
        {/* USER IMAGE */}
        <Avatar.Image size={160} source={require('./../../../assets/user.jpg')} />
        {/* USER NAME */}
        <Text variant="titleMedium">Emre MUTLU</Text>
        {/* USER ROLE */}
        <View className="items-center">
          <Text variant="titleMedium" className="text-yellow-500">
            Admin
          </Text>
        </View>
      </View>

      <View className="items-start">
        {/* MENU */}
        {/* MENU ITEM - HOME */}
        <StyledButton icon="home" mode="text" textColor="black">
          Home
        </StyledButton>
        {/* MENU ITEM - COURSE */}
        <StyledButton icon="book" mode="text" textColor="black">
          Courses
        </StyledButton>
        {/* MENU ITEM - STUDENTS - SELECTED */}
        <StyledButton
          icon="account-group"
          className="flex flex-row items-center justify-between bg-yellow-500  rounded-md"
          textColor="black"
        >
          Students
        </StyledButton>
        {/* MENU ITEM - PAYMENT */}
        <StyledButton icon="cash" mode="text" textColor="black">
          Payments
        </StyledButton>
        {/* MENU ITEM - REPORT */}
        <StyledButton icon="file-chart" mode="text" textColor="black">
          Reports
        </StyledButton>
        {/* MENU ITEM - SETTINGS */}
        <StyledButton icon="cog" mode="text" textColor="black">
          Settings
        </StyledButton>
      </View>

      <View className="items-end justify-end">
        {/* LOGOUT */}
        <StyledButton icon="logout" mode="text" textColor="black">
          Logout
        </StyledButton>
      </View>
    </View>
  );
}
