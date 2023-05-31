import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
// import ApiClient from "openapi-typescript-codegen";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    // const apiClient = new ApiClient();
    // const response = await apiClient.get("/users");
    // setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
