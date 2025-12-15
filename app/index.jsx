import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo2.png";

export default function Index() {
  const router = useRouter()
  const handleGuest = () => {

  }
  return (
    <SafeAreaView className="bg-[#2b2b2b] items-center justify-center">
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <StatusBar barStyle={"light-content"} />
        <View className="flex-1 justify-center items-center">
          <Image source={logo} style={{ width: 150, height: 150, marginLeft:20 }} />
          <View className="w-3/4 flex my-20">
            <TouchableOpacity
              className="p-2 my-2 bg-[#f49b33]  text-black rounded-lg "
              onPress={() => router.push("/loginbox")} >
              <Text className="text-lg font-semibold text-center">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2 my-2 bg-[#2b2b2b] border border-[#f49b33] rounded-lg max-w-fit "
              onPress={handleGuest}>
              <Text className="text-lg font-semibold text-[#f49b33] text-center">Guest User</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center text-base  font-semibold my-4 text-white">
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" /> or{" "}
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
            </Text>

            <TouchableOpacity
              className="flex flex-row justify-center items-center"
              onPress={() => router.push("/signup")}
            >
              <Text className="text-white font-semibold">Don't have an account? </Text>
              <Text className="text-base font-semibold underline text-[#f49b33]">{" "}
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View className="flex-1">
          <Image
            source={entryImg}
            className="w-full"
            resizeMode="contain"
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
