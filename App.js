import React, { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as Updates from "expo-updates";
import { enableScreens } from "react-native-screens";
import Shell from "./src/Shell.js";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

enableScreens(true);

export default function App() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.log(`Error updating the app! ${error}`);
    }
  }

  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    Montserrat: require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./src/assets/fonts/Montserrat-Bold.ttf"),
    MontserratLight: require("./src/assets/fonts/Montserrat-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView}>
      <Shell />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
