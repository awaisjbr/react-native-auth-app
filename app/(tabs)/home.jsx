import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../../components/Loading";
import { useAuthStore } from "../../store/useAuthContext";

const Home = () =>{
    const router = useRouter();
    const {authUser, isLoading, logout, isAuthenticated} = useAuthStore();
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (!isAuthenticated) {
          router.replace("/");
        }
      }, [isAuthenticated]);

    return (
        <SafeAreaView className="bg-[#2b2b2b]">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <View className="flex-1 items-center justify-center">
                    <Text className="text-white">Home Page</Text>
                    <Text  className="text-white">{authUser?.userName}</Text>
                    <Text  className="text-white">{authUser?.email}</Text>
                    <TouchableOpacity
                        className="p-2 my-2 bg-[#f49b33]  text-black rounded-lg "
                        onPress={handleLogout} >
                        <Text className="text-lg font-semibold text-center">Logout</Text>
                    </TouchableOpacity>
                    {isLoading && <Loading />}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home