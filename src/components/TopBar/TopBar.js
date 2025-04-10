import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import TopBarStyle from "./TopBar.style.js";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { Asset } from "expo-asset";
import logo from "../../assets/logos/logo.png";
import profile from "../../assets/logos/profile.png";

const TopBar = (props) => {
  const navigation = useNavigation();

  const [logoUri1, setLogoUri1] = useState(null);
  const [logoUri2, setLogoUri2] = useState(null);

  useEffect(() => {
    const loadAssets = async () => {
      const logoAsset1 = Asset.fromModule(
        require("../../assets/images/profilepic.svg")
      );
      const logoAsset2 = Asset.fromModule(
        require("../../assets/logos/logoblue.svg")
      );

      await Asset.loadAsync([logoAsset1, logoAsset2]);

      setLogoUri1(logoAsset1.uri);
      setLogoUri2(logoAsset2.uri);
    };

    loadAssets();
  }, []);

  return (
    <View style={TopBarStyle.view}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        style={TopBarStyle.menu}
      >
        <Entypo name="menu" size={40} color="black" />
      </TouchableOpacity>
      {/* {!logoUri1 ? (
        <View style={{ width: 112, height: 31 }} />
      ) : (
        <SvgUri uri={logoUri2} style={TopBarStyle.logoblue} />
      )}
      {!logoUri2 ? (
        <View style={{ width: 45, height: 45 }} />
      ) : (
        <SvgUri uri={logoUri1} style={TopBarStyle.profilepic} />
      )} */}
      <Image source={logo} style={TopBarStyle.logoblue} />
      <Image source={profile} style={TopBarStyle.profilepic} />
    </View>
  );
};
export default TopBar;
