
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
     <SafeAreaView style={{ flex: 1 }}>

    <Stack screenOptions={{headerShown:false, }}>
      <Stack.Screen name="index" options={{ title: "home" }} />
      <Stack.Screen name="menu"  options={{ title: "Menu" }} />
    </Stack>

     </SafeAreaView>
  );
}
