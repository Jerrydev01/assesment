import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import MainStackScreen from "./src/navigation/ParentRoute";
import { store } from "./src/reduxt-toolkit/store/store";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "poppins-bold": require("./assets/fonts/PoppinsBold.ttf"),
    "poppins-medium": require("./assets/fonts/PoppinsMedium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
          <StatusBar style="auto" backgroundColor="" />
          <MainStackScreen />
        </PaperProvider>
      </Provider>
    </>
  );
}

