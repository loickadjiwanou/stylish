import React, { useState, useEffect } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LandingStyle from "./Landing.style.js";
import landing from "../../../assets/images/landing.png";
import CustomButton from "../../../components/CustomButton/CustomButton.js";
import colors from "../../../assets/colors/colors.js";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { Asset } from "expo-asset";

const Landing = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [logoUri, setLogoUri] = useState(null);

  useEffect(() => {
    const loadAssets = async () => {
      const logoAsset = Asset.fromModule(
        require("../../../assets/images/landing.svg")
      );

      await Asset.loadAsync(logoAsset);

      setLogoUri(logoAsset.uri);
    };

    loadAssets();
  }, []);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("DrawerNavigator");
    }, 2000);
  };

  return (
    <View style={LandingStyle.view}>
      {/* <SvgUri uri={logoUri} style={LandingStyle.image} /> */}

      <Image source={landing} style={LandingStyle.image} />
      <LinearGradient
        colors={[
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.6)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.7)",
        ]}
        style={LandingStyle.gradient}
      >
        <View style={LandingStyle.zone}>
          <Text style={LandingStyle.text1}>
            You want{"\n"}Authentic, here{"\n"}you go!
          </Text>
          <Text style={LandingStyle.text2}>Find it here, buy it now!</Text>

          <View style={LandingStyle.button}>
            <CustomButton
              title="Create Account"
              textColor={colors.white}
              borderColor={colors.red}
              buttonHeight={55}
              color={colors.red}
              handlePress={handleGetStarted}
              loaderColor={colors.white}
              loading={loading}
            />
          </View>
        </View>
      </LinearGradient>
      {/* <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor="transparent"
      /> */}
    </View>
  );
};
export default Landing;
