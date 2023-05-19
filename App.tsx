import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./setting/store";
import { Provider } from "react-redux";
import WrapComponents from "./components/WrapComponents";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <WrapComponents />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//O auth Client Id = 728453521582-8c99sl751f4ae7p4t200djda7cbkk453.apps.googleusercontent.com
