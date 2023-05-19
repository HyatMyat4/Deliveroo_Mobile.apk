import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";

import React from "react";

const SecondNavBar = () => {
  return (
    <View className="wauto h-[50px] mb-[10px] flex flex-row items-center justify-between mt-[5px]">
      <View className=" flex-1 w-auto h-full flex flex-row items-center  overflow-hidden  bg-gray-200 px-[10px] rounded-[5px] ">
        <SearchIcon size={25} color={"#9E9E9E"} />
        <TextInput
          className="w-[93%] h-full  ml-[7px] text-[15px]"
          placeholder="Restaurants and cuisines"
          keyboardType="default"
          placeholderTextColor="#8E8E8E"
        />
      </View>
      <TouchableOpacity className="ml-[10px] mr-[3px]">
        <AdjustmentsIcon size={30} color={"#00C1B2"} />
      </TouchableOpacity>
    </View>
  );
};

export default SecondNavBar;
