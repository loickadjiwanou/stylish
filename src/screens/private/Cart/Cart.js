import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import CartStyle from "./Cart.style.js";
import colors from "../../../assets/colors/colors.js";
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Cart = (props) => {
  const navigation = useNavigation();

  return (
    <View style={CartStyle.view}>
      <View style={CartStyle.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          style={CartStyle.topBarLeft}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={CartStyle.topBarTitle}>Cart</Text>

        <View style={CartStyle.topBarRight} />
      </View>
    </View>
  );
};
export default Cart;
