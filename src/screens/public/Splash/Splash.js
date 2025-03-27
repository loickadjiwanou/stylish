import React, { useEffect, useState } from "react";
import { View, Text, Image, Animated } from "react-native";
import SplashStyle from "./Splash.style.js";
import { useNavigation } from "@react-navigation/native";
import logo from "../../../assets/logos/logo.png";

const Splash = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.navigate("Splashs");
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={SplashStyle.view}>
      {/* Animation d'apparition */}
      <Animated.Image
        source={logo}
        style={[{ alignSelf: "center", opacity: fadeAnim }]}
      />
    </View>
  );
};

export default Splash;
