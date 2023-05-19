import { View, Text, Image, TouchableOpacity } from "react-native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";

const NavBar = () => {
  const navigation: NavigationProp<ReactNavigation.RootParamList> | any =
    useNavigation();
  return (
    <View className="w-full h-[60px] flex flex-row items-center justify-between  ">
      <View className="w-auro h-full flex flex-row  items-center flex-1 ">
        <Image
          className="w-[43px] h-[43px]"
          source={require("../assets/deliveroo.png")}
        />
        <View className="flex flex-col ml-[5px] ">
          <Text className="text-[13px] font-medium text-gray-400">
            Deliver now!
          </Text>
          <View className=" flex flex-row items-center">
            <Text className=" text-[16px] font-bold mr-[5px] ">
              Current Location
            </Text>
            <ChevronDownIcon size={22} color={"#00C1B2"} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Auth")}
        className=" hover:scale-90 transition-all duration-75 cursor-pointer  "
      >
        <UserIcon size={32} color={"#00C1B2"} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
