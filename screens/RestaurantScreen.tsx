import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import CartComponent from "../components/CartComponent";
import { useSelector } from "react-redux";
import { userCartC } from "../setting/action_slice";
import {
  ArrowLeftIcon,
  LocationMarkerIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
interface Props {
  Id: string | number;
  ImageURL: string;
  Title: string;
  Rating: number;
  Genre: string;
  Address: string;
  Short_description: string;
  RestaurantsDishes: RestaurantsDishes[];
  Long: number;
  Lat: number;
}

interface RestaurantsDishes {
  Title: string;
  ImageURL: string;
  Short_description: string;
  Price: number;
}

const RestaurantScreen = () => {
  const user_Items = useSelector(userCartC);
  const navigation: any = useNavigation();
  const {
    params: {
      Id,
      ImageURL,
      Title,
      Rating,
      Genre,
      Address,
      Short_description,
      RestaurantsDishes,
      Long,
      Lat,
    },
  }: Props | any = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <ScrollView className=" relative bg-slate-100">
        <View className=" relative">
          <Image className="w-full h-[250px] " source={{ uri: ImageURL }} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className=" absolute top-[40px] left-[20px] p-[7px] rounded-full bg-white"
        >
          <ArrowLeftIcon size={25} color={"#00C1B2"} />
        </TouchableOpacity>
        <View className=" py-[10px] flex flex-col bg-white">
          <View className="px-[10px] w-full h-auto">
            <Text className=" text-[25px]  font-extrabold ">{Title}</Text>
          </View>
          <View className="w-full px-[10px] h-auto pt-[2px]  flex flex-row items-center justify-start">
            <View className="mr-[5px]">
              <StarIcon size={18} color={"#00C1B2"} />
            </View>
            <Text className=" mr-[5px] text-[#00C1B2]  ">{Rating}</Text>
            <Text className=" mr-[5px]  ">.</Text>
            <TouchableOpacity className=" mr-[8px]">
              <Text className=" text-[12px] text-gray-400  ">{Genre}</Text>
            </TouchableOpacity>

            <View className="mr-[1px]">
              <LocationMarkerIcon size={18} color={"#BDBDBD"} />
            </View>
            <Text className=" mr-[4px]  text-[13px] text-gray-400  ">
              Nearby
            </Text>
            <Text className=" mr-[4px] text-gray-400  ">.</Text>
            <TouchableOpacity>
              <Text className=" text-[12px] text-gray-400   ">{Address}</Text>
            </TouchableOpacity>
          </View>
          <View className="py-[13px] px-[10px]">
            <Text>{Short_description}</Text>
          </View>
          <View className="border-t border-gray-200"></View>
          <TouchableOpacity className="w-full px-[10px] h-auto pt-[13px] pb-[5px] flex flex-row items-center  justify-between">
            <View className=" flex flex-row items-center">
              <View className="mr-[15px]">
                <QuestionMarkCircleIcon size={18} color={"#BDBDBD"} />
              </View>
              <Text className=" text-[15px] font-extrabold ">
                Have a food allergy?
              </Text>
            </View>
            <View className=" flex flex-row items-center">
              <ChevronRightIcon size={28} color={"#00C1B2"} />
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-full h-[50px] flex flex-row items-center  justify-between px-[10px]">
          <Text className=" text-[23px]  font-extrabold ">Menu</Text>
        </View>
        <View
          className={` ${user_Items.length > 0 ? "pb-[100px]" : ""}   bg-white`}
        >
          {RestaurantsDishes.map((dish: RestaurantsDishes) => (
            <DishRow
              key={dish.Title}
              Title={dish.Title}
              ImageURL={dish.ImageURL}
              Short_description={dish.Short_description}
              Price={dish.Price}
              dish={dish}
            />
          ))}
        </View>
      </ScrollView>
      {user_Items.length > 0 ? (
        <CartComponent
          Title={Title}
          Long={Long}
          Lat={Lat}
          Short_description={Short_description}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default RestaurantScreen;
