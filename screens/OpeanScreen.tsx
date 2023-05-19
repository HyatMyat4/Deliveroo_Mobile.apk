import { View, Text, Image } from "react-native";
import React from "react";

const OpeanScreen = () => {
  return (
    <View className=" flex-1 flex flex-col items-center justify-center bg-[#00B9B2]">
      <View className="w-full">
        <Image
          className="w-full h-[230px]"
          source={require("../assets/deliveroo2.png")}
        />
      </View>
    </View>
  );
};

export default OpeanScreen;
