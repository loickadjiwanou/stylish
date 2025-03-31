import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import DrawerContentStyle from "./DrawerContent.style.js";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../../assets/colors/colors.js";
import { useNavigation } from "@react-navigation/native";

const DrawerContent = (props) => {
  const navigation = useNavigation();

  return <View style={DrawerContentStyle.view}></View>;
};
export default DrawerContent;
