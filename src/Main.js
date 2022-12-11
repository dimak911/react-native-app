import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Home from "../src/screens/Home";
import Auth from "../src/screens/Auth";
import { useAuthContext } from "./hooks/useAuthContext";

SplashScreen.preventAutoHideAsync();

export default function Main() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  const { user, dispatch } = useAuthContext();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        {!user ? <Auth /> : <Home />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
