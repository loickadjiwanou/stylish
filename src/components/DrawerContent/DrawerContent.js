import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import DrawerContentStyle from "./DrawerContent.style.js";
import { Feather, Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors/colors.js";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logos/logo.png";

const DrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={DrawerContentStyle.view}>
      <View style={DrawerContentStyle.head}>
        <Image source={logo} style={DrawerContentStyle.logo} />
      </View>

      <ScrollView
        vertical
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 25 }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DrawerNavigator", {
              screen: "Homee",
              params: { screen: "Home" },
            })
          }
          style={DrawerContentStyle.item}
        >
          <Feather name="home" size={26} color={colors.black} />
          <Text style={DrawerContentStyle.title}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DrawerNavigator", {
              screen: "Homee",
              params: { screen: "Wishlist" },
            })
          }
          style={DrawerContentStyle.item}
        >
          <Ionicons name="heart-outline" size={26} color={colors.black} />
          <Text style={DrawerContentStyle.title}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DrawerNavigator", {
              screen: "Homee",
              params: { screen: "Cart" },
            })
          }
          style={DrawerContentStyle.item}
        >
          <Feather name="shopping-cart" size={26} color={colors.black} />
          <Text style={DrawerContentStyle.title}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DrawerNavigator", {
              screen: "Homee",
              params: { screen: "Search" },
            })
          }
          style={DrawerContentStyle.item}
        >
          <Ionicons name="search-outline" size={26} color={colors.black} />
          <Text style={DrawerContentStyle.title}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DrawerNavigator", {
              screen: "Homee",
              params: { screen: "Profile" },
            })
          }
          style={DrawerContentStyle.item}
        >
          <Feather name="settings" size={26} color={colors.black} />
          <Text style={DrawerContentStyle.title}>Profile</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={DrawerContentStyle.version}>
        <Text style={DrawerContentStyle.versionText}>Version 1.0.0</Text>
      </View>
    </View>
  );
};
export default DrawerContent;
