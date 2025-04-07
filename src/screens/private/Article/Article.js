import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ArticleStyle from "./Article.style.js";
import colors from "../../../assets/colors/colors.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Article = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const article = route.params?.article;

  return (
    <View style={ArticleStyle.view}>
      <View style={ArticleStyle.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Article;
