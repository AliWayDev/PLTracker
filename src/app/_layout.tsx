import { globalStyle } from "@/styles/global";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (<Stack screenOptions={{
    headerStyle: globalStyle.header
  }} >
    <Stack.Screen name="(tabs)" options={{
      headerShown: false
    }} />
    <Stack.Screen name="exercise" options={{
      title: "Exercise",
      headerBackTitle: "Home"
    }}  
    />
  </Stack>);
}
