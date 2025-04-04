import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import HomeStyle from "./Home.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../assets/colors/colors.js";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import cat1 from "../../../assets/images/category1.png";
import cat2 from "../../../assets/images/category2.png";
import cat3 from "../../../assets/images/category3.png";
import cat4 from "../../../assets/images/category4.png";
import cat5 from "../../../assets/images/category5.png";
import Swiper from "react-native-swiper";
import backimage from "../../../assets/images/backimage.png";
import ArticleSwiper from "../../../components/ArticleSwiper/ArticleSwiper.js";

const Home = (props) => {
  const navigation = useNavigation();
  const [screenLoader, setScreenLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const activityIndicator = () => {
    return (
      <View style={HomeStyle.activityIndicator}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // articles data
  const data = [
    {
      id: "1",
      title: "Women Printed Kurta",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹2499",
      price: "₹1500",
      discount: "40%",
      stars: "4.5",
      ratings: 56890,
      image: require("../../../assets/articles_images/image1.png"),
    },
    {
      id: "2",
      title: "HRX by Hrithik Roshan",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹2499",
      price: "₹4999",
      discount: "50%",
      stars: "4.5",
      ratings: 344567,
      image: require("../../../assets/articles_images/image2.png"),
    },
    {
      id: "3",
      title: "IWC Schaffhausen",
      description: "2021 Pilot's Watch SIHH 2019 44mm",
      oldPrice: "₹650",
      price: "₹1599",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/image3.png"),
    },
    {
      id: "4",
      title: "NIke Sneakers",
      description: "Nike Air Jordan Retro 1 Low Mystic Black",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 46890,
      image: require("../../../assets/articles_images/image4.png"),
    },
    {
      id: "5",
      title: "Labbins",
      description: "Labbin White Sneakers For Men and Female",
      oldPrice: "₹650",
      price: "₹1250",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/image5.png"),
    },
    {
      id: "6",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/image6.png"),
    },
  ];

  return (
    <ScrollView
      vertical
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={HomeStyle.view}
    >
      <TopBar />

      <View style={HomeStyle.searchComponent}>
        <View style={HomeStyle.iconBox}>
          <AntDesign
            name="search1"
            size={24}
            color={colors.gray}
            style={HomeStyle.icon}
          />
        </View>
        <TextInput
          placeholder="Search"
          value={search}
          onChange={(text) => setSearch(text)}
          style={HomeStyle.input}
        />
        <View style={HomeStyle.iconBox}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color={colors.gray}
            style={HomeStyle.icon}
          />
        </View>
      </View>

      <View style={HomeStyle.topLayer}>
        <Text style={HomeStyle.topLayerTitle}>All Featured</Text>

        <View style={HomeStyle.sortBox}>
          <TouchableOpacity style={HomeStyle.sort}>
            <Text style={HomeStyle.sortText}>Sort</Text>
            <FontAwesome name="sort" size={20} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={HomeStyle.sort}>
            <Text style={HomeStyle.sortText}>Filter</Text>
            <MaterialCommunityIcons
              name="filter-outline"
              size={20}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={HomeStyle.categoryBox}>
        <TouchableOpacity style={HomeStyle.category}>
          <Image source={cat1} style={HomeStyle.categoryImage} />
          <Text style={HomeStyle.categoryText}>Beauty</Text>
        </TouchableOpacity>

        <TouchableOpacity style={HomeStyle.category}>
          <Image source={cat2} style={HomeStyle.categoryImage} />
          <Text style={HomeStyle.categoryText}>Fashion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={HomeStyle.category}>
          <Image source={cat3} style={HomeStyle.categoryImage} />
          <Text style={HomeStyle.categoryText}>Kids</Text>
        </TouchableOpacity>

        <TouchableOpacity style={HomeStyle.category}>
          <Image source={cat4} style={HomeStyle.categoryImage} />
          <Text style={HomeStyle.categoryText}>Men</Text>
        </TouchableOpacity>

        <TouchableOpacity style={HomeStyle.category}>
          <Image source={cat5} style={HomeStyle.categoryImage} />
          <Text style={HomeStyle.categoryText}>Women</Text>
        </TouchableOpacity>
      </View>

      <View style={HomeStyle.swiper}>
        <Swiper
          ref={swiperRef}
          style={HomeStyle.wrapper}
          showsButtons={false}
          loop={false}
          onIndexChanged={(index) => setIndex(index)}
          dot={<View style={HomeStyle.dot} />}
          activeDot={<View style={HomeStyle.activeDot} />}
        >
          <View style={HomeStyle.slide}>
            <Image source={backimage} style={HomeStyle.image} />
            <View style={HomeStyle.swiperTexts}>
              <Text style={HomeStyle.swiperText1}>50-40% OFF</Text>
              <Text style={HomeStyle.swiperText2}>Now in (products)</Text>
              <Text style={HomeStyle.swiperText3}>All colours</Text>
              <TouchableOpacity
                onPress={() => {}}
                hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
                style={HomeStyle.swiperButton}
              >
                <Text style={HomeStyle.swiperText4}>Shop Now</Text>
                <FontAwesome6
                  name="arrow-right-long"
                  size={16}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={HomeStyle.slide}>
            <Image source={backimage} style={HomeStyle.image} />
            <View style={HomeStyle.swiperTexts}>
              <Text style={HomeStyle.swiperText1}>50-40% OFF</Text>
              <Text style={HomeStyle.swiperText2}>Now in (products)</Text>
              <Text style={HomeStyle.swiperText3}>All colours</Text>
              <TouchableOpacity
                onPress={() => {}}
                hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
                style={HomeStyle.swiperButton}
              >
                <Text style={HomeStyle.swiperText4}>Shop Now</Text>
                <FontAwesome6
                  name="arrow-right-long"
                  size={16}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={HomeStyle.slide}>
            <Image source={backimage} style={HomeStyle.image} />
            <View style={HomeStyle.swiperTexts}>
              <Text style={HomeStyle.swiperText1}>50-40% OFF</Text>
              <Text style={HomeStyle.swiperText2}>Now in (products)</Text>
              <Text style={HomeStyle.swiperText3}>All colours</Text>
              <TouchableOpacity
                onPress={() => {}}
                hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
                style={HomeStyle.swiperButton}
              >
                <Text style={HomeStyle.swiperText4}>Shop Now</Text>
                <FontAwesome6
                  name="arrow-right-long"
                  size={16}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Swiper>
      </View>

      <View style={HomeStyle.dealBox}>
        <View style={HomeStyle.dealTexts}>
          <Text style={HomeStyle.dealText1}>Deal of the Day</Text>
          <View style={HomeStyle.dealTime}>
            <Ionicons
              style={HomeStyle.dealIcon}
              name="alarm-outline"
              size={24}
              color={colors.white}
            />
            <Text style={HomeStyle.dealText2}>22h 55m 20s remaining</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
          style={HomeStyle.dealButton}
        >
          <Text style={HomeStyle.dealText3}>View All</Text>
          <FontAwesome6
            name="arrow-right-long"
            size={16}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <View style={HomeStyle.articleSwiper}>
        <ArticleSwiper articles={data} />
      </View>

      <View style={HomeStyle.footer} />
    </ScrollView>
  );
};
export default Home;
