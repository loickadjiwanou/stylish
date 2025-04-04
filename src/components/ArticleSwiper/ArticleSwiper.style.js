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
    width: 200,
    alignItems: "center",
    marginRight: 15,
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 5,
  },
  textSection: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: 200,
  },
  text1: {
    fontSize: 18,
    fontFamily: "MontserratBold",
    color: colors.black,
  },
  text2: {
    fontSize: 16,
    fontFamily: "Montserrat",
    color: colors.black,
    marginTop: 8,
  },
  text3: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    color: colors.black,
    marginTop: 8,
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text4: {
    fontSize: 16,
    fontFamily: "Montserrat",
    color: colors.gray,
    textDecorationLine: "line-through",
  },
  text5: {
    fontSize: 16,
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
    fontSize: 26,
    color: "white",
  },
  ratingContainerStyle: {
    //
  },
  ratingSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: 2,
  },
  text6: {
    fontSize: 16,
    fontFamily: "MontserratLight",
    color: colors.gray,
    left: 5,
    top: 1,
  },
  arrowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    alignSelf: "center",
    top: 140,
    // opacity: 0.8,
  },
  arrow: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.lightgray2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1,
  },
});
export default ArticleSwiperStyle;
