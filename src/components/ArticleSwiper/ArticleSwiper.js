import React, { useRef, useState } from "react";
import ArticleSwiperStyle from "./ArticleSwiper.style.js";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import colors from "../../assets/colors/colors";
import StarRating from "../StarRating/StarRating.js";
import { Feather } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const ArticleSwiper = (props) => {
  const type = props.type;
  const data = props.articles;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const [stars, setStars] = useState(data);

  const handleStars = (id, newStar) => {
    console.log("Id:", id, "New Star:", newStar);
    setStars((prevStars) =>
      prevStars.map((item) =>
        item.id === id ? { ...item, stars: newStar } : item
      )
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={ArticleSwiperStyle.item}>
        <Image source={item?.image} style={ArticleSwiperStyle.image} />
        <View style={ArticleSwiperStyle.textSection}>
          <Text
            numberOfLines={1}
            style={[
              ArticleSwiperStyle.text1,
              type === "square-small" && { fontFamily: "MontserratLight" },
            ]}
          >
            {item?.title}
          </Text>
          <Text
            numberOfLines={2}
            style={[
              ArticleSwiperStyle.text2,
              type === "square-small" && {
                fontFamily: "MontserratLight",
                marginTop: 0,
              },
            ]}
          >
            {item?.description}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              ArticleSwiperStyle.text3,
              type === "square-small" && {
                fontFamily: "Montserrat",
                marginTop: 0,
              },
            ]}
          >
            {item?.price}
          </Text>
          <View style={ArticleSwiperStyle.priceSection}>
            {item?.discount ? (
              <>
                <Text
                  style={[
                    ArticleSwiperStyle.text4,
                    type === "square-small" && { fontFamily: "Montserrat" },
                  ]}
                >
                  {item?.oldPrice}
                </Text>
                <Text
                  style={[
                    ArticleSwiperStyle.text5,
                    type === "square-small" && { fontFamily: "Montserrat" },
                  ]}
                >
                  {item?.discount}OFF
                </Text>
              </>
            ) : (
              (
                <Text style={[ArticleSwiperStyle.text4, { display: "none" }]}>
                  {item?.discount}OFF
                </Text>
              ) && (
                <Text style={ArticleSwiperStyle.text5}>{item?.oldPrice}</Text>
              )
            )}
          </View>

          {type !== "square-small" && (
            <View style={ArticleSwiperStyle.ratingSection}>
              <View style={ArticleSwiperStyle.ratingContainerStyle}>
                <StarRating
                  rating={item.stars}
                  onRate={(newRating) => handleStars(item.id, newRating)}
                />
              </View>
              <Text style={ArticleSwiperStyle.text6}>{item?.ratings}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      scrollRef.current.scrollTo({ x: newIndex * screenWidth, animated: true });
      setActiveIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (activeIndex < stars.length - 1) {
      const newIndex = activeIndex + 1;
      scrollRef.current.scrollTo({ x: newIndex * screenWidth, animated: true });
      setActiveIndex(newIndex);
    }
  };

  return (
    <View style={ArticleSwiperStyle.container}>
      <View style={ArticleSwiperStyle.arrowContainer}>
        {activeIndex > 0 ? (
          <TouchableOpacity
            onPress={handlePrev}
            style={ArticleSwiperStyle.arrow}
          >
            <Feather name="chevron-left" size={25} color={colors.black} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {activeIndex < stars.length - 1 ? (
          <TouchableOpacity
            onPress={handleNext}
            style={ArticleSwiperStyle.arrow}
          >
            <Feather name="chevron-right" size={25} color={colors.black} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <ScrollView
        horizontal
        overScrollMode="never"
        pagingEnabled
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth
          );
          setActiveIndex(index);
        }}
      >
        {stars.map((item, index) => (
          <View key={item.id}>{renderItem({ item })}</View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ArticleSwiper;
