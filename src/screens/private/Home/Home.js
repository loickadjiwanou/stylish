import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
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
  Entypo,
} from "@expo/vector-icons";
import cat1 from "../../../assets/images/category1.png";
import cat2 from "../../../assets/images/category2.png";
import cat3 from "../../../assets/images/category3.png";
import cat4 from "../../../assets/images/category4.png";
import cat5 from "../../../assets/images/category5.png";
import Swiper from "react-native-swiper";
import backimage from "../../../assets/images/backimage.png";
import ArticleSwiper from "../../../components/ArticleSwiper/ArticleSwiper.js";
import offerImage from "../../../assets/images/offer.png";
import orangeDots from "../../../assets/images/orange_dots.png";
import heels from "../../../assets/images/heels.png";
import hot_summer_sale from "../../../assets/images/hot_summer_sale.png";
import sponsored from "../../../assets/images/sponsored.png";

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

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    const timer = setTimeout(() => {
      setRefreshing(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <View style={HomeStyle.view}>
      <View style={{ marginBottom: 10 }}>
        <TopBar />
      </View>

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
          onChangeText={(text) => setSearch(text)}
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

      <ScrollView
        vertical
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
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

        <View style={HomeStyle.offerBox}>
          <Image source={offerImage} style={HomeStyle.offerImage} />
          <View style={HomeStyle.offerTxts}>
            <Text style={HomeStyle.offerTxt1}>Special Offers 😱</Text>
            <Text style={HomeStyle.offerTxt2}>
              We make sure you get the offer you need at best prices
            </Text>
          </View>
        </View>

        <View style={HomeStyle.pubBox}>
          <View style={HomeStyle.pubBox2}>
            <View style={HomeStyle.bar} />
            <Image source={orangeDots} style={HomeStyle.orangeDots} />
            <Image source={heels} style={HomeStyle.heelsImage} />
          </View>
          <View style={HomeStyle.pubTxts}>
            <Text style={HomeStyle.pubTxt1}>Flat and Heels</Text>
            <Text style={HomeStyle.pubTxt2}>
              Stand a chance to get rewarded
            </Text>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
              style={HomeStyle.dealButton2}
            >
              <Text style={HomeStyle.dealText3}>Visit now</Text>
              <FontAwesome6
                name="arrow-right-long"
                size={16}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={HomeStyle.dealBox2}>
          <View style={HomeStyle.dealTexts}>
            <Text style={HomeStyle.dealText1}>Trending Products</Text>
            <View style={HomeStyle.dealTime2}>
              <Ionicons
                style={HomeStyle.dealIcon}
                name="calendar"
                size={24}
                color={colors.white}
              />
              <Text style={HomeStyle.dealText2}>Last Date 29/02/22</Text>
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

        <View style={HomeStyle.articleSwiper2}>
          <ArticleSwiper articles={data} type={"square-small"} />
        </View>

        <View>
          <Image source={hot_summer_sale} style={HomeStyle.hotSummerSale} />
          <View style={HomeStyle.hotSummerSaleBottom}>
            <View style={HomeStyle.hotSummerSaleBottomTxts}>
              <Text style={HomeStyle.hotSummerSaleBottomTxt1}>
                New Arrivlas
              </Text>
              <Text style={HomeStyle.hotSummerSaleBottomTxt2}>
                Summer’ 25 Collections
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
              style={HomeStyle.dealButton3}
            >
              <Text style={HomeStyle.dealText3}>View All</Text>
              <FontAwesome6
                name="arrow-right-long"
                size={16}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={HomeStyle.sponsoredBox}>
          <Text style={HomeStyle.sponsoredText}>Sponsored</Text>
          <Image source={sponsored} style={HomeStyle.sponsoredImage} />
          <TouchableOpacity
            onPress={() => {}}
            hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
            style={HomeStyle.sponsoredBottom}
          >
            <Text style={HomeStyle.sponsoredText}>up to 50% Off</Text>
            <Entypo name="chevron-right" size={20} color={colors.black} />
          </TouchableOpacity>
        </View>

        <View style={HomeStyle.footer} />
      </ScrollView>
    </View>
  );
};
export default Home;
