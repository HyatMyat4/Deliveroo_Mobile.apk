import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { XIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useRef } from "react";
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";
import MapView, { Marker, MapViewProps } from "react-native-maps";
import * as Progress from "react-native-progress";

interface Props {
  Title: string;
  Long: number;
  Lat: number;
  Short_description: string;
}

const DeliveryScreen = () => {
  const mapRef = useRef<MapViewProps | MapView | any>(null);
  const navigation: any | NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  const {
    params: { Title, Long, Lat, Short_description },
  }: Props | any = useRoute();

  const handleZoom = (zoomLevel: number) => {
    const region = {
      latitude: Lat,
      longitude: Long,
      latitudeDelta: zoomLevel,
      longitudeDelta: zoomLevel,
    };
    if (mapRef.current) {
      mapRef?.current?.animateToRegion(region, 2500); // Adjust the duration as needed
    }
  };

  return (
    <SafeAreaView className="bg-[#01CCBD] flex-1 relative  ">
      <View className="w-full h-[60px] flex flex-row items-center justify-between px-[15px] ">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <XIcon size={32} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity className=" flex flex-row items-center ">
          <Text className=" text-white font-medium ">Order Help</Text>
          <View className="ml-[5px]">
            <QuestionMarkCircleIcon size={20} color={"white"} />
          </View>
        </TouchableOpacity>
      </View>
      <View className=" bg-white mx-5 my-2 rounded-md p-6 z-40 shadow-md ">
        <View className="flex flex-row items-center justify-between ">
          <View>
            <Text className=" text-[16px] text-gray-400">
              Estimated Arrival
            </Text>
            <Text className=" font-extrabold text-[30px]">40-60 Minutes</Text>
          </View>
          <View className="w-[70px] h-[70px] overflow-hidden flex flex-row justify-center mr-[15px]">
            <Image
              className="w-[80px] h-[75px] pb-[5px]"
              source={{
                uri: "https://media2.giphy.com/media/gsr9MG7bDvSRWWSD1Y/200w.gif?cid=82a1493b636m5qoulezq1moo40uz29yopewuue2iiuw0v8ri&ep=v1_gifs_related&rid=200w.gif&ct=s",
              }}
            />
          </View>
        </View>

        <View className="my-[10px]">
          <Progress.Bar
            progress={0.3}
            width={200}
            indeterminate={true}
            color={"#01CCBD"}
          />
        </View>
        <Text className=" text-[13px] text-gray-400">
          Your order at {Title.slice(0, 10)} is being prepared
        </Text>
      </View>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: Lat,
          longitude: Long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className=" flex-1 z-0 -mt-10 "
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: Lat,
            longitude: Long,
          }}
          title={Title}
          description={Short_description.slice(0, 30)}
          identifier="origin"
          pinColor="#01CCBD"
        />
      </MapView>
      <View className=" flex flex-col absolute bottom-[12px] left-[12px]">
        <TouchableOpacity onPress={() => handleZoom(0.01)}>
          <PlusCircleIcon size={38} color={"#00C1B2"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleZoom(0.1)}>
          <MinusCircleIcon size={38} color={"#00C1B2"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
