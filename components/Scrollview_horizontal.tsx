import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import { Category } from "../Api/constants";
import React from "react";

const Scrollview_horizontal = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 0,
        paddingTop: 5,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((category) => (
        <CategoryCard
          key={category.Id}
          Id={category.Id}
          ImageURL={category.ImageURL}
          Title={category.Title}
          FetchURL={category.FetchURl}
        />
      ))}
    </ScrollView>
  );
};

export default Scrollview_horizontal;
