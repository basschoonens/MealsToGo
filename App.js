import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <PaperProvider>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </PaperProvider>
    </>
  );
}
