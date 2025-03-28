import React, { useEffect, useState, useRef } from "react";
import SplashsStyle from "./Splashs.style.js";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../assets/colors/colors.js";
import { SvgUri } from "react-native-svg";
import { Asset } from "expo-asset";

const Splashs = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const [logoUri1, setLogoUri1] = useState(null);
  const [logoUri2, setLogoUri2] = useState(null);
  const [logoUri3, setLogoUri3] = useState(null);

  useEffect(() => {
    const loadAssets = async () => {
      const logoAsset1 = Asset.fromModule(
        require("../../../assets/images/splash1.svg")
      );
      const logoAsset2 = Asset.fromModule(
        require("../../../assets/images/splash2.svg")
      );
      const logoAsset3 = Asset.fromModule(
        require("../../../assets/images/splash3.svg")
      );

      await Asset.loadAsync([logoAsset1, logoAsset2, logoAsset3]);

      setLogoUri1(logoAsset1.uri);
      setLogoUri2(logoAsset2.uri);
      setLogoUri3(logoAsset3.uri);
    };

    loadAssets();
  }, []);

  return (
    <View style={SplashsStyle.view}>
      <View style={SplashsStyle.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[SplashsStyle.index, { color: colors.black }]}>
            {index + 1}
          </Text>
          <Text style={SplashsStyle.index}>/3</Text>
        </View>
        <TouchableOpacity
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={SplashsStyle.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Swiper
        ref={swiperRef}
        style={SplashsStyle.wrapper}
        showsButtons={false}
        loop={false}
        onIndexChanged={(index) => setIndex(index)}
        dot={<View style={SplashsStyle.dot} />}
        activeDot={<View style={SplashsStyle.activeDot} />}
      >
        <View style={SplashsStyle.slide}>
          <SvgUri uri={logoUri1} width={300} height={300} />
          <Text style={SplashsStyle.title}>Choose Products</Text>
          <Text style={SplashsStyle.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>

        <View style={SplashsStyle.slide}>
          <SvgUri uri={logoUri2} width={350} height={230} />
          <Text style={SplashsStyle.title}>Make Payment</Text>
          <Text style={SplashsStyle.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>

        <View style={SplashsStyle.slide}>
          <SvgUri uri={logoUri3} width={350} height={350} />
          <Text style={SplashsStyle.title}>Get Your Order</Text>
          <Text style={SplashsStyle.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>
      </Swiper>

      <View style={SplashsStyle.buttons}>
        {index > 0 ? (
          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            onPress={() => swiperRef.current?.scrollBy(-1)}
          >
            <Text style={SplashsStyle.nav}>Prev</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}

        {index < 2 ? (
          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            onPress={() => swiperRef.current?.scrollBy(+1)}
          >
            <Text style={SplashsStyle.nav}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={SplashsStyle.nav}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default Splashs;
