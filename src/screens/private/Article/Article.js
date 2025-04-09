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
  FontAwesome,
  Octicons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import shoes from "../../../assets/images/shoes.png";
import Swiper from "react-native-swiper";
import StarRating from "../../../components/StarRating/StarRating.js";
import ArticleSwiper from "../../../components/ArticleSwiper/ArticleSwiper.js";

const Article = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const article = route.params?.article;
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("7UK");

  const [stars, setStars] = useState(article);

  const handleStars = (newStar) => {
    setStars((prevArticle) => ({
      ...prevArticle,
      stars: newStar,
    }));
  };

  const [showFullText, setShowFullText] = useState(false);

  const handleMorePress = () => {
    setShowFullText(!showFullText);
  };

  const [liked, setLiked] = useState(false);

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
      image: require("../../../assets/articles_images/sneaker1.png"),
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
      image: require("../../../assets/articles_images/sneaker2.png"),
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
            <Image source={article?.image} style={ArticleStyle.image} />
            <Image source={article?.image} style={ArticleStyle.image} />
            <Image source={article?.image} style={ArticleStyle.image} />
            <Image source={article?.image} style={ArticleStyle.image} />
            <Image source={article?.image} style={ArticleStyle.image} />
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

        <View>
          <Text style={ArticleStyle.title}>{article?.title}</Text>
          <Text style={ArticleStyle.description}>{article?.description}</Text>
          <View style={ArticleStyle.ratingSection}>
            <View style={ArticleStyle.ratingContainerStyle}>
              <StarRating
                rating={stars.stars}
                onRate={(newRating) => handleStars(newRating)}
              />
            </View>
            <Text style={ArticleStyle.text6}>{article?.ratings}</Text>
          </View>
          <View style={ArticleStyle.priceSection}>
            <Text style={ArticleStyle.oldPrice}>{article?.oldPrice}</Text>
            <Text style={ArticleStyle.price}>{article?.price}</Text>
            <Text style={ArticleStyle.discount}>{article?.discount} Off</Text>
          </View>
        </View>

        <View style={ArticleStyle.productDetails}>
          <Text style={ArticleStyle.productDetailsTxt}>Product Details</Text>
          <Text
            style={ArticleStyle.productDetails2}
            numberOfLines={showFullText ? undefined : 3}
          >
            Perhaps the most iconic sneaker of all-time, this original "Chicago"
            colorway is the cornerstone to any sneaker collection. Made famous
            in 1985 by Michael Jordan, the shoe has stood the test of time,
            becoming the most famous colorway of the Air Jordan 1. This 2015
            release saw the ...
          </Text>
          <TouchableOpacity onPress={handleMorePress}>
            <Text
              style={{
                color: colors.red,
                fontFamily: "MontserratLight",
              }}
            >
              {showFullText ? "Less" : "More"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={ArticleStyle.locationSection}>
          <TouchableOpacity style={ArticleStyle.location}>
            <Octicons name="location" size={22} color={colors.gray} />
            <Text style={ArticleStyle.locationtxt}>Nearest Store</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ArticleStyle.location}>
            <AntDesign name="lock1" size={22} color={colors.gray} />
            <Text style={ArticleStyle.locationtxt}>VIP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ArticleStyle.location}>
            <Ionicons
              name="reload-circle-outline"
              size={22}
              color={colors.gray}
            />
            <Text style={ArticleStyle.locationtxt}>Return policy</Text>
          </TouchableOpacity>
        </View>

        <View style={ArticleStyle.buttonsView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={ArticleStyle.gotocart}
          >
            <View style={ArticleStyle.gotocarticon}>
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color={colors.white}
              />
            </View>
            <View style={ArticleStyle.gotocarttxtview}>
              <Text style={ArticleStyle.gotocarttxt}>Go to cart</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("BuyNow")}
            style={ArticleStyle.buynowcart}
          >
            <View style={ArticleStyle.buynowcarticon}>
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color={colors.white}
              />
            </View>
            <View style={ArticleStyle.buynowcarttxtview}>
              <Text style={ArticleStyle.buynowcarttxt}>Buy Now</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <AntDesign
              name={liked ? "heart" : "hearto"}
              size={34}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>

        <View style={ArticleStyle.deliverySection}>
          <Text style={ArticleStyle.deliveryTxt}>Delivery in</Text>
          <Text style={ArticleStyle.deliveryTime}>Within 1 hour</Text>
        </View>

        <View style={ArticleStyle.viewSimilar}>
          <TouchableOpacity
            onPress={() => {}}
            style={ArticleStyle.viewSimilarSection}
          >
            <AntDesign name="eyeo" size={24} color={colors.black} />
            <Text style={ArticleStyle.viewSimilarTxt}>View Similar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={ArticleStyle.viewSimilarSection}
          >
            <MaterialCommunityIcons
              name="cards-outline"
              size={24}
              color={colors.black}
            />
            <Text style={ArticleStyle.viewSimilarTxt}>Add to Compare</Text>
          </TouchableOpacity>
        </View>

        <View style={ArticleStyle.bottom}>
          <Text style={ArticleStyle.bottomTxt}>Similar To</Text>
          <View style={ArticleStyle.topLayer}>
            <Text style={ArticleStyle.topLayerTitle}>52,082+ Iteams</Text>

            <View style={ArticleStyle.sortBox}>
              <TouchableOpacity style={ArticleStyle.sort}>
                <Text style={ArticleStyle.sortText}>Sort</Text>
                <FontAwesome name="sort" size={22} color={colors.black} />
              </TouchableOpacity>

              <TouchableOpacity style={ArticleStyle.sort}>
                <Text style={ArticleStyle.sortText}>Filter</Text>
                <MaterialCommunityIcons
                  name="filter-outline"
                  size={22}
                  color={colors.black}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={ArticleStyle.articleSwiper}>
          <ArticleSwiper key={data?.id} articles={data} />
        </View>

        <View style={ArticleStyle.footer} />
      </ScrollView>
    </View>
  );
};
export default Article;
