import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import "./index.css";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        {/* <Stack.Screen name="(auth)" /> */}
      </Stack>
      <Toast />
    </>
  );
}


// <Tabs
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarActiveTintColor:"orange",
    //     tabBarInactiveTintColor: "gray",
    //     tabBarStyle: {
    //       backgroundColor: "#2b2b2b",
    //       borderTopWidth:2,
    //       borderTopColor: "#2b2b2b"
    //     },        
    //     tabBarLabelStyle: { fontSize: 14 },
    //   }}
    // >
    //   <Tabs.Screen
    //     name="loginbox"
    //     options={{
    //       title: "Login",
    //       tabBarIcon: ({ color, size }) => (
    //         <Ionicons name="person" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="signup"
    //     options={{
    //       title: "Signup",
    //       tabBarIcon: ({ color, size }) => (
    //         <Ionicons name="log-out-outline" size={size} color={color} />
    //       ),
    //     }}
    //   />
    // </Tabs>
