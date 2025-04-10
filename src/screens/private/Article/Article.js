import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import ArticleStyle from "./Article.style.js";
import colors from "../../../assets/colors/colors.js";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
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
import { saveData, getData } from "../../../functions/mmkv.js";

const Article = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const article = route.params?.article;
  const from = route.params?.from;
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("7UK");
  const [screenLoader, setScreenLoader] = useState(true);
  const [stars, setStars] = useState(article);

  const activityIndicator = () => {
    return (
      <View style={ArticleStyle.activityIndicator}>
        <ActivityIndicator size="small" color={colors.black} />
      </View>
    );
  };

  const handleStars = async (newStar, item) => {
    setStars((prevArticle) => ({
      ...prevArticle,
      stars: newStar,
    }));

    const updatedArticles = data.map((dataItem) =>
      dataItem.id === article.id ? { ...dataItem, stars: newStar } : dataItem
    );

    if (from === "swiper") {
      await saveData("articles", updatedArticles);
    } else {
      await saveData("wishlistarticles", updatedArticles);
    }
  };

  const [showFullText, setShowFullText] = useState(false);

  const handleMorePress = () => {
    setShowFullText(!showFullText);
  };

  const [liked, setLiked] = useState(false);

  // articles data
  const [data, setData] = useState([]);

  useEffect(() => {
    const getArticleData = async () => {
      const data = await getData("articles");
      if (data) {
        setData(data);
      }
      setScreenLoader(false);
    };
    getArticleData();
  }, []);

  const [isAlreadyInCart, setIsAlreadyInCart] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const checkCart = async () => {
        const cartArticles = (await getData("cartArticles")) || [];
        const isArticleInCart = cartArticles.find(
          (item) => item.id === article.id
        );
        setIsAlreadyInCart(!!isArticleInCart);
      };

      checkCart();

      return () => {
        //
      };
    }, [article.id])
  );

  const handleAddToCart = async (article) => {
    const cartArticles = (await getData("cartArticles")) || [];

    const isAlreadyInCart = cartArticles.find((item) => item.id === article.id);

    let updatedCart;

    if (isAlreadyInCart) {
      updatedCart = cartArticles.filter((item) => item.id !== article.id);
      ToastAndroid.show("Article removed from cart", ToastAndroid.SHORT);
      setIsAlreadyInCart(false);
    } else {
      updatedCart = [...cartArticles, article];
      ToastAndroid.show("Article added to cart", ToastAndroid.SHORT);
      setIsAlreadyInCart(true);
    }

    await saveData("cartArticles", updatedCart);
  };

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
        {screenLoader ? (
          activityIndicator()
        ) : (
          <>
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
              <Text style={ArticleStyle.description}>
                {article?.description}
              </Text>
              <View style={ArticleStyle.ratingSection}>
                <View style={ArticleStyle.ratingContainerStyle}>
                  <StarRating
                    rating={stars.stars}
                    onRate={(newRating) => handleStars(newRating, article)}
                  />
                </View>
                <Text style={ArticleStyle.text6}>{article?.ratings}</Text>
              </View>
              <View style={ArticleStyle.priceSection}>
                <Text style={ArticleStyle.oldPrice}>{article?.oldPrice}</Text>
                <Text style={ArticleStyle.price}>{article?.price}</Text>
                <Text style={ArticleStyle.discount}>
                  {article?.discount} Off
                </Text>
              </View>
            </View>

            <View style={ArticleStyle.productDetails}>
              <Text style={ArticleStyle.productDetailsTxt}>
                Product Details
              </Text>
              <Text
                style={ArticleStyle.productDetails2}
                numberOfLines={showFullText ? undefined : 3}
              >
                Perhaps the most iconic sneaker of all-time, this original
                "Chicago" colorway is the cornerstone to any sneaker collection.
                Made famous in 1985 by Michael Jordan, the shoe has stood the
                test of time, becoming the most famous colorway of the Air
                Jordan 1. This 2015 release saw the ...
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
              <View style={ArticleStyle.gotocart}>
                <View style={ArticleStyle.gotocarticon}>
                  <MaterialCommunityIcons
                    name="cart-outline"
                    size={24}
                    color={colors.white}
                  />
                </View>
                <Pressable
                  onPress={() => handleAddToCart(article)}
                  style={[
                    ArticleStyle.gotocarttxtview,
                    isAlreadyInCart && { backgroundColor: colors.lightgray },
                  ]}
                >
                  <Text style={ArticleStyle.gotocarttxt}>Add to cart</Text>
                </Pressable>
              </View>

              <View style={ArticleStyle.buynowcart}>
                <View style={ArticleStyle.buynowcarticon}>
                  <MaterialCommunityIcons
                    name="cart-outline"
                    size={24}
                    color={colors.white}
                  />
                </View>
                <Pressable
                  onPress={() =>
                    navigation.navigate("BuyNow", { article: article })
                  }
                  style={ArticleStyle.buynowcarttxtview}
                >
                  <Text style={ArticleStyle.buynowcarttxt}>Buy Now</Text>
                </Pressable>
              </View>

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
          </>
        )}
      </ScrollView>
    </View>
  );
};
export default Article;
