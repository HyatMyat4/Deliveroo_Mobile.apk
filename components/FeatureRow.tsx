import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import Dishes_component from "./Dishes";
import LoadingSkeleton from "./LoadingSkeleton";
import { RestaurantsDishesType } from "../Api/constants";
interface Props {
  Id: number | string;
  Title: string;
  Description: string;
  Dishes: Dishes[];
  Loading: any;
  LodingArry: number[];
}

interface Dishes {
  Id: number | string;
  Title: string;
  Rating: number;
  Genre: string;
  Address: string;
  ImageURL: string;
  Short_description: string;
  RestaurantsDishes: any | RestaurantsDishesType[];
  Long: number;
  Lat: number;
}

const FeatureRow = ({
  Id,
  Title,
  Description,
  Dishes,
  Loading,
  LodingArry,
}: Props) => {
  return (
    <View key={Id} className=" mt-[15px] flex flex-col items-start">
      <View className=" flex-1 flex flex-row items-center justify-between ">
        <Text className=" flex-1 text-[18px] font-bold">{Title}</Text>
        <TouchableOpacity className="mr-[5px]">
          <ArrowRightIcon size={25} color={"#00C1B2"} />
        </TouchableOpacity>
      </View>
      <Text className=" text-[12px] text-gray-500 opacity-[0.8] ">
        {Description}
      </Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Loading
          ? Dishes.map((dish) => (
              <Dishes_component
                key={dish.Id}
                Id={dish.Title + dish.Id}
                ImageURL={dish.ImageURL}
                Title={dish.Title}
                Rating={dish.Rating}
                Genre={dish.Genre}
                Address={dish.Address}
                Short_description={dish.Short_description}
                RestaurantsDishes={dish.RestaurantsDishes.create}
                Long={dish.Long}
                Lat={dish.Lat}
              />
            ))
          : LodingArry.map((index) => (
              <LoadingSkeleton
                key={index}
                Id={index}
                ImageURL={""}
                Title={""}
                Rating={0}
                Genre={""}
                Address={""}
                Short_description={""}
                RestaurantsDishes={[]}
                Long={0}
                Lat={0}
              />
            ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
