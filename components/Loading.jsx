import { ActivityIndicator, View } from "react-native";

const Loading = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
      }}
    >
      <ActivityIndicator size="large" color="#f49b33" />
    </View>
  );
}

export default Loading;
