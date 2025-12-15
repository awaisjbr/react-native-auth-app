import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () =>{
    const router = useRouter();
    return (
        <SafeAreaView className="bg-[#2b2b2b]">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <View>
                    <Text className="text-white">Settings Page</Text>
                    <TouchableOpacity onPress={() => router.push("/")}>
                        <Text>Go to</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings