import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";

import OrderDish from "../components/OrderDish";
import { userCartC, TotalPriceC, TotalItems } from "../setting/action_slice";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { CreditCardIcon } from "react-native-heroicons/solid";

import React from "react";
interface Props {
  Title: string;
  Long: number;
  Lat: number;
  Short_description: string;
}
interface Cart {
  Title: string;
  ImageURL: string;
  Short_description: string;
  Price: number;
  Quantity?: number;
}
const BasketScreen = () => {
  const {
    params: { Title, Long, Lat, Short_description },
  }: Props | any = useRoute();
  const navigation: any | NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  const user_Items = useSelector(userCartC);
  const SubTotal = useSelector(TotalPriceC);
  const Total_Items = useSelector(TotalItems);

  return (
    <SafeAreaView className=" bg-white  ">
      <View className="w-full h-full flex flex-col items-center justify-between">
        <View className="w-full h-auto relative flex flex-row items-center  border-b border-gray-200 justify-center pb-[25px] ">
          <View className="w-auto h-auto flex flex-col  items-center justify-center ">
            <Text className=" text-[20px] font-extrabold">Basket</Text>
            <Text className=" text-[14px]  text-gray-400 ">{Title}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" absolute right-[20px]"
          >
            <XCircleIcon size={40} color={"#00C1B2"} />
          </TouchableOpacity>
        </View>
        <View className="w-full h-auto py-[8px] bg-gray-200  px-[15px] flex flex-row items-center justify-between">
          <View className="flex flex-row items-center ">
            <View className="">
              <Image
                className="w-[55px] h-[45px] rounded-full "
                source={{
                  uri: "https://media1.giphy.com/media/w4l7IdrSxZHHsryJ0W/giphy.gif",
                }}
              />
            </View>
            <Text className=" ml-[15px] text-[14px] ">
              Delivery in 50-60 min
            </Text>
          </View>
          <TouchableOpacity className="mr-[5px]">
            <Text className=" text-[#00C1B2]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="w-full h-auto">
          {user_Items.map((item: Cart) => (
            <OrderDish key={item.Title} item={item} />
          ))}
        </ScrollView>
        <View className="w-full bg-white  p-5 space-y-4 ">
          <View className="  flex flex-row items-center justify-between ">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">${SubTotal}</Text>
          </View>
          <View className="  flex flex-row items-center justify-between ">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$5.68</Text>
          </View>
          <View className="  flex flex-row items-center justify-between ">
            <Text className="text-gray-400">Order Total</Text>
            <Text className="text-gray-400">${SubTotal + 5.68}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Preparing", {
                Title,
                Long,
                Lat,
                Short_description,
              })
            }
            className="w-full h-[60px] rounded-[10px]  bg-[#00C1B2] flex flex-row items-center justify-center "
          >
            <Text className="text-white text-[16px] font-extrabold">
              Place Order
            </Text>
            <View className="ml-[10px]">
              <CreditCardIcon size={25} color={"#FFFFFF"} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
