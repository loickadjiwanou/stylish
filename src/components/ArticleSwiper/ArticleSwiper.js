import React, { useRef, useState } from "react";
import ArticleSwiperStyle from "./ArticleSwiper.style.js";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import colors from "../../assets/colors/colors";

const ArticleSwiper = (props) => {
  const data = props.articles;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const [stars, setStars] = useState(data);

  const handleStars = (id, newStar) => {
    console.log("handleStars called");
    console.log("newStar", newStar, id);
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
          <Text style={ArticleSwiperStyle.text1}>{item?.title}</Text>
          <Text style={ArticleSwiperStyle.text2}>{item?.description}</Text>
          <Text style={ArticleSwiperStyle.text3}>{item?.price}</Text>
          <View style={ArticleSwiperStyle.priceSection}>
            <Text style={ArticleSwiperStyle.text4}>{item?.oldPrice}</Text>
            <Text style={ArticleSwiperStyle.text5}>{item?.discount}OFF</Text>
          </View>
          <View>
            {/* <Rating
              showRating={false}
              startingValue={item.stars}
              imageSize={18}
              onFinishRating={(star) => {
                console.log("⭐ onFinishRating triggered", star, item.id);
                handleStars(item.id, star);
              }}
            /> */}
            <AirbnbRating
              defaultRating={item.stars ?? 0}
              reviews={["", "", "", "", ""]}
              selectedColor={colors.yellow}
              //   unSelectedColor={colors.lightgray}
              ratingContainerStyle={{
                width: 200,
                marginTop: -50,
                left: -38,
                backgroundColor: "transparent",
              }}
              size={20}
              onFinishRating={(rating) =>
                console.log("AirbnbRating selected:", rating)
              }
            />
            <Text style={ArticleSwiperStyle.text6}>{item?.starts}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={ArticleSwiperStyle.container}>
      <ScrollView
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <View key={item.id}>{renderItem({ item })}</View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ArticleSwiper;
