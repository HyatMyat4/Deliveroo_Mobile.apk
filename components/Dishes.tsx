import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon, LocationMarkerIcon } from "react-native-heroicons/outline";
import React from "react";
import { useNavigation } from "@react-navigation/native";
interface Props {
  Id: string | number;
  ImageURL: string;
  Title: string;
  Rating: number;
  Genre: string;
  Address: string;
  Short_description: string;
  RestaurantsDishes: any[];
  Long: number;
  Lat: number;
}

const Dishes = ({
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
}: Props) => {
  const navigation: any = useNavigation();
  return (
    <View key={Id} className="">
      <View className="w-[250px] h-[220px] bg-gray-200 rounded-[5px] overflow-hidden mr-[15px]">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Restaurant", {
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
            });
          }}
          className=" shadow-lg"
        >
          <Image
            className="w-[full] h-[145px] rounded-[5px]"
            source={{
              uri: ImageURL,
            }}
          />
        </TouchableOpacity>
        <View className="px-[8px] py-[5px] flex flex-col ">
          <TouchableOpacity>
            <Text className=" text-[17px] font-bold">{Title}</Text>
          </TouchableOpacity>
          <View className="  flex flex-row items-center justify-start">
            <View className="mr-[5px]">
              <StarIcon size={18} color={"#00C1B2"} />
            </View>
            <Text className=" mr-[5px] text-[#00C1B2]  ">{Rating}</Text>
            <Text className=" mr-[5px]  ">.</Text>
            <TouchableOpacity>
              <Text className=" text-[12px] text-gray-400  ">{Genre}</Text>
            </TouchableOpacity>
          </View>
          <View className="  flex flex-row items-center justify-start">
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
        </View>
      </View>
    </View>
  );
};

export default Dishes;
