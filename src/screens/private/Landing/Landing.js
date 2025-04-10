import React, { useState, useEffect } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LandingStyle from "./Landing.style.js";
import landing from "../../../assets/images/landing.png";
import CustomButton from "../../../components/CustomButton/CustomButton.js";
import colors from "../../../assets/colors/colors.js";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { Asset } from "expo-asset";
import { saveData } from "../../../functions/mmkv.js";

const Landing = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [logoUri, setLogoUri] = useState(null);

  useEffect(() => {
    const loadAssets = async () => {
      const logoAsset = Asset.fromModule(
        require("../../../assets/images/landing.svg")
      );

      await Asset.loadAsync(logoAsset);

      setLogoUri(logoAsset.uri);
    };

    loadAssets();
  }, []);

  // articles data
  const data = [
    {
      id: "1",
      title: "Women Printed Kurta",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹ 2499",
      price: "₹ 1500",
      discount: "40%",
      stars: "4.5",
      ratings: 56890,
      image: require("../../../assets/articles_images/image1.png"),
    },
    {
      id: "2",
      title: "HRX by Hrithik Roshan",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹ 2499",
      price: "₹ 4999",
      discount: "50%",
      stars: "4.5",
      ratings: 344567,
      image: require("../../../assets/articles_images/image2.png"),
    },
    {
      id: "3",
      title: "IWC Schaffhausen",
      description: "2021 Pilot's Watch SIHH 2019 44mm",
      oldPrice: "₹ 650",
      price: "₹ 1599",
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
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 46890,
      image: require("../../../assets/articles_images/image4.png"),
    },
    {
      id: "5",
      title: "Labbins",
      description: "Labbin White Sneakers For Men and Female",
      oldPrice: "₹ 650",
      price: "₹ 1250",
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
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/image6.png"),
    },
  ];

  // wishlist data
  const wishlist = [
    {
      id: "0",
      title: "HRX by Hrithik Roshan",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹ 2499",
      price: "₹ 4999",
      discount: "50%",
      stars: "4.5",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory2.png"),
    },
    {
      id: "1",
      title: "NIke Sneakers",
      description: "Nike Air Jordan Retro 1 Low Mystic Black",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 46890,
      image: require("../../../assets/articles_images/mansory4.png"),
    },
    {
      id: "2",
      title: "Women Printed Kurta",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹ 2499",
      price: "₹ 1500",
      discount: "40%",
      stars: "4.5",
      ratings: 56890,
      image: require("../../../assets/articles_images/mansory9.png"),
    },
    {
      id: "3",
      title: "HRX by Hrithik Roshan",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹ 2499",
      price: "₹ 4999",
      discount: "50%",
      stars: "4.5",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory2.png"),
    },
    {
      id: "4",
      title: "IWC Schaffhausen",
      description: "2021 Pilot's Watch SIHH 2019 44mm",
      oldPrice: "₹ 650",
      price: "₹ 1599",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory3.png"),
    },
    {
      id: "5",
      title: "Labbins",
      description: "Labbin White Sneakers For Men and Female",
      oldPrice: "₹ 650",
      price: "₹ 1250",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory5.png"),
    },
    {
      id: "6",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory6.png"),
    },
    {
      id: "7",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory7.png"),
    },
    {
      id: "8",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory8.png"),
    },
    {
      id: "9",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory1.png"),
    },
    {
      id: "10",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory10.png"),
    },
    {
      id: "11",
      title: "Women Printed Kurta",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹ 2499",
      price: "₹ 1500",
      discount: "40%",
      stars: "4.5",
      ratings: 56890,
      image: require("../../../assets/articles_images/mansory9.png"),
    },
    {
      id: "12",
      title: "HRX by Hrithik Roshan",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹ 2499",
      price: "₹ 4999",
      discount: "50%",
      stars: "4.5",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory2.png"),
    },
    {
      id: "13",
      title: "IWC Schaffhausen",
      description: "2021 Pilot's Watch SIHH 2019 44mm",
      oldPrice: "₹ 650",
      price: "₹ 1599",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory3.png"),
    },
    {
      id: "14",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory11.png"),
    },
    {
      id: "15",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory12.png"),
    },
    {
      id: "16",
      title: "Labbins",
      description: "Labbin White Sneakers For Men and Female",
      oldPrice: "₹ 650",
      price: "₹ 1250",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory5.png"),
    },
    {
      id: "17",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory6.png"),
    },
    {
      id: "18",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory7.png"),
    },
    {
      id: "19",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory8.png"),
    },
    {
      id: "20",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory1.png"),
    },
    {
      id: "21",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹ 1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory7.png"),
    },
  ];

  useEffect(() => {
    const saveArticlesData = async () => {
      await saveData("articles", data);
      await saveData("wishlistarticles", wishlist);
    };
    saveArticlesData();
  }, []);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("DrawerNavigator");
    }, 2000);
  };

  return (
    <View style={LandingStyle.view}>
      {/* <SvgUri uri={logoUri} style={LandingStyle.image} /> */}

      <Image source={landing} style={LandingStyle.image} />
      <LinearGradient
        colors={[
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.6)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.7)",
        ]}
        style={LandingStyle.gradient}
      >
        <View style={LandingStyle.zone}>
          <Text style={LandingStyle.text1}>
            You want{"\n"}Authentic, here{"\n"}you go!
          </Text>
          <Text style={LandingStyle.text2}>Find it here, buy it now!</Text>

          <View style={LandingStyle.button}>
            <CustomButton
              title="Get Started"
              textColor={colors.white}
              borderColor={colors.red}
              buttonHeight={55}
              color={colors.red}
              handlePress={handleGetStarted}
              loaderColor={colors.white}
              loading={loading}
            />
          </View>
        </View>
      </LinearGradient>
      {/* <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor="transparent"
      /> */}
    </View>
  );
};
export default Landing;
