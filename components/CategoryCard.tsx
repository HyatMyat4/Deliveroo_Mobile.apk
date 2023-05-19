import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
interface Props {
  Id: number | string;
  ImageURL: string;
  Title: string;
}

const CategoryCard = ({ Id, ImageURL, Title }: Props) => {
  return (
    <TouchableOpacity
      key={Id}
      className={`w-[90px] shadow-inne shadow-inherit h-[90px] cursor-pointer relative mr-[10px] overflow-hidden  bg-black  rounded-[5px] flex flex-row items-center justify-center`}
    >
      <View className="w-full h-full">
        <Image
          className="w-[full]  h-full rounded-[5px]"
          source={{
            uri: ImageURL,
          }}
        />
      </View>
      <Text className=" absolute left-[4px] text-[14px] bottom-[5px] text-white font-bold ">
        {Title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
