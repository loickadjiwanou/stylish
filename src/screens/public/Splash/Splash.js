import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { Asset } from "expo-asset";
import SplashStyle from "./Splash.style.js";

const Splash = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [logoUri, setLogoUri] = useState(null);

  useEffect(() => {
    const logoAsset = Asset.fromModule(
      require("../../../assets/logos/logo.svg")
    );
    setLogoUri(logoAsset.uri);

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

  if (!logoUri) {
    return null;
  }

  return (
    <Animated.View style={SplashStyle.view}>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <SvgUri uri={logoUri} width={275} height={100} />
      </Animated.View>
    </Animated.View>
  );
};

export default Splash;
