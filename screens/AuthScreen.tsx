import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userInfoEngin } from "../setting/action_slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
} from "expo-auth-session";
import { useState } from "react";

WebBrowser.maybeCompleteAuthSession();

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync]: any = Google.useAuthRequest({
    clientId:
      "728453521582-1vgbicaf6loe2clu3f4fiedrkmmdh9tn.apps.googleusercontent.com",
    androidClientId:
      "728453521582-8c99sl751f4ae7p4t200djda7cbkk453.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const useInfo = await response.json();
    setUser(useInfo);
    console.log(user, "💚");
  }
  return (
    <SafeAreaView className=" flex-1 flex flex-col items-center justify-center bg-[#00B9B2]">
      <View className="w-full">
        <Image
          className="w-full h-[230px]"
          source={require("../assets/deliveroo2.png")}
        />
      </View>
      <View className="w-full h-auto px-[20px] flex flex-col items-center justify-center">
        <TouchableOpacity
          onPress={() => {
            promptAsync();
          }}
          className="w-full h-[60px] font-bold rounded-[10px] mt-[40px]  flex flex-row items-center  justify-start px-[50px] bg-white "
        >
          <View>
            <Image
              className="w-[40px] h-[40px]"
              source={require("../assets/google.png")}
            />
          </View>
          <View className=" ml-[20px]">
            <Text className=" text-[#00B9B2] font-[800px] text-[20px] ">
              Sign With Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
