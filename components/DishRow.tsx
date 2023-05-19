import { View, Text, Image, TouchableOpacity } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";

import {
  clickById,
  clickIdC,
  UserCartEngin,
  userCartC,
  RemoveItemDcreased,
} from "../setting/action_slice";
import React from "react";

interface Cart {
  Title: string;
  ImageURL: string;
  Short_description: string;
  Price: number;
  Quantity?: number;
}

interface dish {
  Title: string;
  ImageURL: string;
  Short_description: string;
  Price: number;
}

interface Props {
  Title: string;
  ImageURL: string;
  Short_description: string;
  Price: number;
  dish: any;
}

const DishRow = ({
  Title,
  ImageURL,
  Short_description,
  Price,
  dish,
}: Props) => {
  const dispatch = useDispatch();
  const click_Name = useSelector(clickIdC);
  const User_cart_Items = useSelector(userCartC);
  const filter_data = User_cart_Items.filter(
    (item: Cart) => item.Title === Title
  );

  return (
    <View className="w-full  h-auto flex flex-col items-start border-b border-gray-300 ">
      <TouchableOpacity
        onPress={() => dispatch(clickById(Title))}
        className="w-full h-auto pl-[10px] py-[10px]  flex flex-row items-center  justify-between"
      >
        <View className="w-[70%] h-auto  flex flex-col items-start">
          <View>
            <Text className=" font-bold">{Title}</Text>
          </View>
          <Text className=" text-[13px] text-gray-400">
            {Short_description}
          </Text>
          <Text className=" text-gray-500 text-[18px]">${Price}</Text>
        </View>
        <View className="w-[30%] h-auto flex flex-row items-center  justify-end p-[8px]  ">
          <Image
            className=" w-[100px] h-[100px] rounded-[5px] "
            source={{ uri: ImageURL }}
          />
        </View>
      </TouchableOpacity>
      {Title === click_Name ? (
        <View className=" flex flex-row items-center ml-[15px] mb-[10px] ">
          <TouchableOpacity
            onPress={
              filter_data[0]?.Quantity > 0
                ? () => dispatch(RemoveItemDcreased(dish))
                : () => ""
            }
          >
            <MinusCircleIcon
              size={38}
              color={filter_data[0]?.Quantity > 0 ? "#00C1B2" : "#BDBDBD"}
            />
          </TouchableOpacity>
          <Text className="mx-[10px] font-extrabold text-[17px] ">
            {filter_data[0]?.Quantity ? filter_data[0]?.Quantity : 0}
          </Text>
          <TouchableOpacity onPress={() => dispatch(UserCartEngin(dish))}>
            <PlusCircleIcon size={38} color={"#00C1B2"} />
          </TouchableOpacity>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default DishRow;
