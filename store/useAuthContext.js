import axios from "axios";
import Toast from "react-native-toast-message";
import { create } from "zustand";

const baseURL = "http://192.168.101.102:4000/api"

export const useAuthStore = create((set) => ({
    authUser: null,
    isAuthenticated: false,
    isLoading: false,

    login: async (credintials) => {
        set({isLoading: true});
        try {
            const {data} = await axios.post(`${baseURL}/auth/login`,credintials );
            if(data.success){
                set({isLoading: false, isAuthenticated: true, authUser: data.user});
                Toast.show({
                    type: "success",
                    text1: data.message
                })
            }else{
                set({isLoading: false, isAuthenticated: false});
                Toast.show({
                    type: "error",
                    text1: data.message
                })
            }
        } catch (error) {
            Toast.show({
                type: "error",
                text1: (error?.response?.data?.message || "User Login Failed")
            })
            set({isLoading: false, authUser:null, isAuthenticated: false})
        }
    },

    logout: async () => {
        set({isLoading: true});
        try {
            const {data} = await axios.post(`${baseURL}/auth/logout` );
            if(data.success){
                set({isLoading: false, isAuthenticated: false, authUser: null});
                Toast.show({
                    type: "success",
                    text1: data.message
                })
            }else{
                set({isLoading: false, isAuthenticated: false});
                Toast.show({
                    type: "error",
                    text1: data.message
                })
            }
        } catch (error) {
            Toast.show({
                type: "error",
                text1: (error?.response?.data?.message || "Logout Failed")
            })
            set({isLoading: false, authUser:null, isAuthenticated: false})
        }
    }
}))