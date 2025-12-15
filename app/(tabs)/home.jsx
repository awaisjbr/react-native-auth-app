import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () =>{
    const router = useRouter();
    return (
        <SafeAreaView className="bg-[#2b2b2b]">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <View>
                    <Text className="text-white">Home Page</Text>
                    <TouchableOpacity onPress={() => router.push("/")}>
                        <Text>Go to</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home