import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import colors from "../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width } = Dimensions.get("window");
const ArticleSwiperStyle = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    borderRadius: 5,
    width: 210,
    // height: 200,
    alignItems: "center",
    marginRight: 15,
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
  image: {
    width: 210,
    height: 145,
    borderRadius: 5,
  },
  textSection: {
    padding: 10,
  },
  text1: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    color: colors.black,
  },
  text2: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: colors.black,
  },
  text3: {
    fontSize: 14,
    fontFamily: "MontserratBold",
    color: colors.black,
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text4: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: colors.gray,
    textDecorationLine: "line-through",
  },
  text5: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: colors.red,
    left: 5,
  },
  arrow: {
    position: "absolute",
    zIndex: 1,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
  },
  arrowText: {
    fontSize: 24,
    color: "white",
  },
});
export default ArticleSwiperStyle;
