import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import lockImage from "../../assets/images/lock.png";
import lockIcon from "../../assets/images/lock1.png";
import userIcon from "../../assets/images/user.png";
import Loading from "../../components/Loading";

const LoginBox = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    try {
      setTimeout(() => {
        router.push("/home");
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView className="bg-[#2b2b2b] min-h-screen">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center justify-between py-28">
          <View className="rounded-full p-5 bg-white">
            <Image source={userIcon} style={{ width: 70, height: 70 }} />
          </View>

          <View className="w-[70%] flex gap-5">
            {/* EMAIL */}
            <View className="bg-white w-full h-10 rounded-full flex-row gap-3 px-5 items-center">
              <Image source={userIcon} style={{ width: 25, height: 25 }} />
              <TextInput
                placeholder="Enter User Name"
                keyboardType="email-address"
                className="flex-1"
                value={formData.email}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, email: text }))} />
            </View>

            {/* PASSWORD */}
            <View className="bg-white w-full h-10 rounded-full flex-row gap-3 px-5 items-center">
              <Image source={lockIcon} style={{ width: 25, height: 25 }} />
              <TextInput
                placeholder="*****"
                secureTextEntry
                className="flex-1"
                value={formData.password}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, password: text }))} />
            </View>

            {/* BUTTON */}
            <TouchableOpacity
              disabled={loading}
              className="p-2 w-[50%] mx-auto h-12 my-2 bg-[#f49b33] rounded-lg"
              onPress={handleSubmit} >
              <Text className="text-lg font-semibold text-center">Login</Text>
            </TouchableOpacity>
          </View>

          <Image source={lockImage} style={{ width: 150, height: 150 }} />
          
          {loading && <Loading />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginBox;
