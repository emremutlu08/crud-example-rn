import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SimpleCrudService } from "./generated";

export default function App() {
  const fetchUsers = async () => {
    try {
      const response = await SimpleCrudService.listUsersUsersGet();
      console.log(response, "response");
    } catch (error) {
      console.error(error, "error");
    }
  };

  useEffect(() => {
    console.log("useEffect");
    fetchUsers();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-blue-100 h-full">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
