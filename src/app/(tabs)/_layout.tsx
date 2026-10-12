import { globalStyle } from "@/styles/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: globalStyle.header,
        headerTitleStyle: { color: "#fff" },
        tabBarStyle: globalStyle.tabs,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarLabelStyle: globalStyle.tab_item,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="history" color={color} size={size} />
          ),
          tabBarInactiveTintColor: "#0391ddff",
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "PLTracker",
          tabBarLabelStyle: globalStyle.tab_item,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color } size={size} />
          ),
          tabBarInactiveTintColor: "#0391ddff",
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="cycles"
        options={{
          title: "Cycles",
          tabBarLabelStyle: globalStyle.tab_item,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="cycle" color={color} size={size} />
          ),
          tabBarInactiveTintColor: "#0391ddff",
          tabBarActiveTintColor: "#fff",
        }}
      />
    </Tabs>
  );
}
