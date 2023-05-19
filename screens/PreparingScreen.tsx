import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import React from "react";
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";
import { useEffect } from "react";
interface Props {
  Title: string;
  Long: number;
  Lat: number;
  Short_description: string;
}
const PreparingScreen = () => {
  const navigation: NavigationProp<ReactNavigation.RootParamList> | any =
    useNavigation();

  const {
    params: { Title, Long, Lat, Short_description },
  }: Props | any = useRoute();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery", { Title, Long, Lat, Short_description });
    }, 4000);
  }, []);

  return (
    <SafeAreaView className=" flex-1 flex flex-col items-center justify-center bg-[#01CCBD]">
      <View className="w-full">
        <Image
          className="w-full h-[370px]"
          source={{
            uri: "https://cdn.dribbble.com/users/118459/screenshots/7025288/media/76c7f0aae651f067c46d5f6ab0840aee.gif",
          }}
        />
      </View>
      <View className=" flex flex-col items-center justify-center">
        <Text className=" font-bold text-[18px] text-white">
          Waiting For Preparing Payment!
        </Text>
        <View className="mt-[40px]">
          <Progress.Circle size={60} indeterminate={true} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreparingScreen;
