import { View, Text } from "react-native";
import PreparingScreen from "../screens/PreparingScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import BasketScreen from "../screens/BasketScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { userInfoC } from "../setting/action_slice";
import OpeanScreen from "../screens/OpeanScreen";
import { useState, useEffect } from "react";
const Stack = createStackNavigator();

const WrapComponents = () => {
  const [open, setopen] = useState<boolean>(true);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function awaitTwoSeconds() {
    await delay(2000);
    setopen(false);
  }

  useEffect(() => {
    setopen(true);
    awaitTwoSeconds();
    setopen(false);
  }, []);

  return (
    <Stack.Navigator>
      {open === false ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="Preparing"
            component={PreparingScreen}
            options={{
              presentation: "modal",
              headerShown: false,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                  }),
                },
              }),
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{
              presentation: "modal",
              headerShown: false,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                  }),
                },
              }),
            }}
          />
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{
              presentation: "modal",
              headerShown: false,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                  }),
                },
              }),
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Open"
          component={OpeanScreen}
          options={{
            presentation: "modal",
            headerShown: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            }),
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default WrapComponents;
