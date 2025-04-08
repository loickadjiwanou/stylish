import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import ArticleStyle from "./Article.style.js";
import colors from "../../../assets/colors/colors.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import shoes from "../../../assets/images/shoes.png";
import Swiper from "react-native-swiper";

const Article = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const article = route.params?.article;
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("7UK");

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

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        vertical
      >
        <View style={ArticleStyle.swiper}>
          <Swiper
            ref={swiperRef}
            style={ArticleStyle.wrapper}
            showsButtons={false}
            loop={false}
            onIndexChanged={(index) => setIndex(index)}
            dot={<View style={ArticleStyle.dot} />}
            activeDot={<View style={ArticleStyle.activeDot} />}
          >
            <Image source={shoes} style={ArticleStyle.image} />
            <Image source={shoes} style={ArticleStyle.image} />
            <Image source={shoes} style={ArticleStyle.image} />
            <Image source={shoes} style={ArticleStyle.image} />
            <Image source={shoes} style={ArticleStyle.image} />
          </Swiper>
        </View>

        <View>
          <Text style={ArticleStyle.size}>Size: 7UK</Text>
          <View style={ArticleStyle.sizeBoxs}>
            <TouchableOpacity
              onPress={() => setSelectedSize("6UK")}
              style={[
                ArticleStyle.sizeBox,
                selectedSize === "6UK" && { backgroundColor: colors.red },
              ]}
            >
              <Text
                style={[
                  ArticleStyle.sizeText,
                  selectedSize === "6UK" && { color: colors.white },
                ]}
              >
                6 UK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedSize("7UK")}
              style={[
                ArticleStyle.sizeBox,
                selectedSize === "7UK" && { backgroundColor: colors.red },
              ]}
            >
              <Text
                style={[
                  ArticleStyle.sizeText,
                  selectedSize === "7UK" && { color: colors.white },
                ]}
              >
                7 UK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedSize("8UK")}
              style={[
                ArticleStyle.sizeBox,
                selectedSize === "8UK" && { backgroundColor: colors.red },
              ]}
            >
              <Text
                style={[
                  ArticleStyle.sizeText,
                  selectedSize === "8UK" && { color: colors.white },
                ]}
              >
                8 UK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedSize("9UK")}
              style={[
                ArticleStyle.sizeBox,
                selectedSize === "9UK" && { backgroundColor: colors.red },
              ]}
            >
              <Text
                style={[
                  ArticleStyle.sizeText,
                  selectedSize === "9UK" && { color: colors.white },
                ]}
              >
                9 UK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedSize("10UK")}
              style={[
                ArticleStyle.sizeBox,
                selectedSize === "10UK" && { backgroundColor: colors.red },
              ]}
            >
              <Text
                style={[
                  ArticleStyle.sizeText,
                  selectedSize === "10UK" && { color: colors.white },
                ]}
              >
                10 UK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Article;
