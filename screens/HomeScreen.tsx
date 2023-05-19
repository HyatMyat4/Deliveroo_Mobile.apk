import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FeatureRowType } from "../Api/constants";
import NavBar from "../components/NavBar";
import SecondNavBar from "../components/SecondNavBar";
import Scrollview_horizontal from "../components/Scrollview_horizontal";
import FeatureRow from "../components/FeatureRow";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [Data, setData] = useState<FeatureRowType[] | undefined>();
  const LodingArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const LodingArry2 = [1, 2, 3, 4];
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://deliveroo.onrender.com/FeatureRow/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Here");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1 px-[10px]">
      <NavBar />
      <SecondNavBar />
      <ScrollView
        className="  pb-[20px]"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingBottom: 10,
        }}
      >
        <Scrollview_horizontal />

        {Data
          ? Data.map((FeatureRow_data) => (
              <FeatureRow
                key={FeatureRow_data.Id}
                Id={FeatureRow_data.Title + FeatureRow_data.Id}
                Title={FeatureRow_data.Title}
                Description={FeatureRow_data.Description}
                Dishes={FeatureRow_data.Dishes[0].create}
                Loading={Data}
                LodingArry={LodingArry}
              />
            ))
          : LodingArry2.map((index) => (
              <FeatureRow
                key={index}
                Id={index}
                Title={""}
                Description={""}
                Dishes={[]}
                Loading={Data}
                LodingArry={LodingArry}
              />
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
