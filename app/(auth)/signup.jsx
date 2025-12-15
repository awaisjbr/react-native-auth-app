import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import emailIcon from "../../assets/images/email.png";
import lockImage from "../../assets/images/lock.png";
import lockIcon from "../../assets/images/lock1.png";
import userIcon from "../../assets/images/user.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <SafeAreaView className="bg-[#2b2b2b] min-h-screen">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center justify-between py-28">

          <View className="rounded-full p-5 bg-white">
            <Image source={userIcon} style={{ width: 70, height: 70 }} />
          </View>

          <View className="w-[70%] flex gap-5">

            {/* USERNAME */}
            <View className="bg-white w-full h-10 rounded-full flex-row gap-3 px-5 items-center">
              <Image source={userIcon} style={{ width: 25, height: 25 }} />
              <TextInput
                placeholder="Enter User Name"
                keyboardType="default"
                className="flex-1"
                value={formData.userName}
                onChangeText={(text) =>
                  setFormData(prev => ({ ...prev, userName: text }))
                }
              />
            </View>

            {/* EMAIL */}
            <View className="bg-white w-full h-10 rounded-full flex-row gap-3 px-5 items-center">
              <Image source={emailIcon} style={{ width: 25, height: 25 }} />
              <TextInput
                placeholder="Enter Email Address"
                keyboardType="email-address"
                className="flex-1"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData(prev => ({ ...prev, email: text }))
                }
              />
            </View>

            {/* PASSWORD */}
            <View className="bg-white w-full h-10 rounded-full flex-row gap-3 px-5 items-center">
              <Image source={lockIcon} style={{ width: 25, height: 25 }} />
              <TextInput
                placeholder="*****"
                secureTextEntry
                className="flex-1"
                value={formData.password}
                onChangeText={(text) =>
                  setFormData(prev => ({ ...prev, password: text }))
                }
              />
            </View>

            {/* BUTTON */}
            <TouchableOpacity
              className="p-2 w-[50%] mx-auto my-2 bg-[#f49b33] rounded-lg"
              onPress={handleSubmit}
            >
              <Text className="text-lg font-bold text-center">
                Register
              </Text>
            </TouchableOpacity>

          </View>

          <Image source={lockImage} style={{ width: 150, height: 150 }} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
