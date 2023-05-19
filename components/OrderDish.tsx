import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MinusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { RemoveItemDcreased } from "../setting/action_slice";
interface Cart {
  Title: string;
  ImageURL: string;
  Short_description: string;
  Price: number;
  Quantity?: number;
}

interface Props {
  item: Cart;
}

const OrderDish = ({ item }: Props) => {
  const dispatch = useDispatch();
  return (
    <View
      key={item.Title}
      className="w-full h-auto flex flex-row px-[15px] py-[10px] items-center justify-between"
    >
      <View className="w-auto h-auto flex flex-row items-center">
        <Text className="text-[#00C1B2] mr-[10px]">{item.Quantity} x</Text>
        <View className="w-auto h-auto flex flex-row items-center">
          <View>
            <Image
              className="w-[45px] h-[45px] rounded-full"
              source={{ uri: item.ImageURL }}
            />
          </View>
          <Text className="ml-[13px]">{item.Title}</Text>
        </View>
      </View>
      <View className="flex flex-row items-center ">
        <View className="mr-[13px]">
          <Text>${item.Price}</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(RemoveItemDcreased(item))}>
          <MinusCircleIcon size={38} color={"#00C1B2"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderDish;
