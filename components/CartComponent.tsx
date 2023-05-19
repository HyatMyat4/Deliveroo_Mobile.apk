import { View, Text, TouchableOpacity } from "react-native";
import { TotalPriceC, TotalItems } from "../setting/action_slice";
import { useSelector } from "react-redux";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
  ShoppingCartIcon,
  CreditCardIcon,
} from "react-native-heroicons/outline";
import React from "react";

interface Props {
  Title: string;
  Long: number;
  Lat: number;
  Short_description: string;
}

const CartComponent = ({ Title, Long, Lat, Short_description }: Props) => {
  const Total_Price = useSelector(TotalPriceC);
  const User_Items = useSelector(TotalItems);
  const navigation: NavigationProp<ReactNavigation.RootParamList> | any =
    useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Basket", { Title, Long, Lat, Short_description })
      }
      className="  w-full flex flex-row items-center justify-center m-auto h-[60px]   absolute z-50 bottom-[15px] "
    >
      <View className="w-[90%] h-full rounded-[10px] flex flex-row items-center  px-[20px] justify-between bg-[#00C1B2]">
        <View className="w-auto h-auto flex flex-row items-center ">
          <View className="  flex flex-row items-center justify-center px-[7px] ">
            <View className="font-extrabold text-white text-[16px] mr-[5px]">
              <ShoppingCartIcon size={25} color={"#FFFFFF"} />
            </View>
            <Text className=" font-extrabold text-white text-[16px]">
              {User_Items}
            </Text>
          </View>
        </View>
        <View></View>
        <View className="w-auto h-auto  flex flex-row items-crenter ">
          <Text className="font-extrabold text-white text-[16px]">
            Sub Total :{" "}
          </Text>
          <Text className="font-extrabold text-[16px] text-white">
            ${Total_Price}
          </Text>
          <View className=" ml-[10px]">
            <CreditCardIcon size={25} color={"#FFFFFF"} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartComponent;
