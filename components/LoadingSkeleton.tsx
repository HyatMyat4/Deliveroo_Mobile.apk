import React from "react";
import { StarIcon, LocationMarkerIcon } from "react-native-heroicons/outline";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

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

const LoadingSkeleton = ({
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
  const shimmerOpacity = new Animated.Value(0);

  React.useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    shimmerAnimation.start();

    return () => {
      shimmerAnimation.stop();
    };
  }, []);

  return (
    <View key={Id} className=" relative">
      <View className="w-[250px]   h-[220px]  rounded-[5px] overflow-hidden mr-[15px]">
        <Animated.View
          style={[
            styles.shimmer,
            {
              opacity: shimmerOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              }),
            },
          ]}
        />
        <TouchableOpacity className=" shadow-lg">
          <View className="w-[full] h-[145px] rounded-[5px]" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shimmer: {
    backgroundColor: "#E0E0E0",
    width: 250,
    height: 220,
    borderRadius: 4,
    marginBottom: 8,
    alignSelf: "center",
    position: "absolute",
  },
});

export default LoadingSkeleton;
