import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const ArticleStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 40,
    paddingHorizontal: 10,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: hp("40%"),
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  swiper: {
    height: 270,
    width: "100%",
  },
  dotIcon: {
    marginHorizontal: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    marginHorizontal: 2,
    backgroundColor: colors.lightgray,
    top: 15,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    backgroundColor: colors.red,
    marginHorizontal: 2,
    top: 15,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 20,
  },
  size: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: colors.black,
  },
  sizeBox: {
    borderWidth: 2,
    borderColor: colors.red,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    paddingHorizontal: 10,
  },
  sizeText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: colors.red,
  },
  sizeBoxs: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    color: colors.black,
  },
  description: {
    fontFamily: "MontserratLight",
    fontSize: 14,
    color: colors.black,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: colors.gray,
    fontSize: 14,
    fontFamily: "Montserrat",
    marginRight: 8,
  },
  price: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Montserrat",
    marginRight: 8,
  },
  discount: {
    color: colors.red,
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  ratingContainerStyle: {
    //
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  ratingSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: 2,
  },
  text6: {
    fontSize: 14,
    fontFamily: "MontserratLight",
    color: colors.gray,
    left: 5,
    top: 1,
  },
  productDetails: {
    //
  },
  productDetailsTxt: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Montserrat",
    marginBottom: 10,
  },
  productDetails2: {
    color: colors.black,
    fontSize: 12,
    fontFamily: "MontserratLight",
    textAlign: "justify",
    lineHeight: 16,
  },
  locationtxt: {
    color: colors.gray,
    fontSize: 12,
    fontFamily: "MontserratLight",
    marginLeft: 5,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.gray,
    paddingVertical: 5,
    borderRadius: 6,
    marginRight: 15,
    paddingHorizontal: 8,
  },
  locationSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  gotocart: {
    flexDirection: "row",
    alignItems: "center",
    width: "43%",
    overflow: "hidden",
  },
  gotocarticon: {
    backgroundColor: colors.blue2,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    zIndex: 1,
  },
  gotocarttxtview: {
    height: 40,
    backgroundColor: colors.blue2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    left: -27,
    borderRadius: 5,
  },
  gotocarttxt: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "MontserratBold",
    left: 12,
  },
  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-between",
  },
  buynowcart: {
    flexDirection: "row",
    alignItems: "center",
    width: "43%",
    overflow: "hidden",
  },
  buynowcarticon: {
    backgroundColor: colors.green,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    zIndex: 1,
  },
  buynowcarttxtview: {
    height: 40,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    left: -20,
    borderRadius: 5,
  },
  buynowcarttxt: {
    left: 10,
    color: colors.white,
    fontSize: 14,
    fontFamily: "MontserratBold",
  },
  deliverySection: {
    backgroundColor: colors.lightpink,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 15,
    borderRadius: 10,
  },
  deliveryTxt: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "MontserratBold",
  },
  deliveryTime: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "MontserratBold",
  },
  footer: {
    marginBottom: 50,
  },
  viewSimilar: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewSimilarSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewSimilarTxt: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Montserrat",
    marginLeft: 12,
  },
  bottom: {
    marginVertical: 20,
  },
  bottomTxt: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    color: colors.black,
  },
  topLayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  topLayerTitle: {
    fontSize: 18,
    fontFamily: "MontserratBold",
    color: colors.black,
  },
  sortBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
  },
  sort: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 65,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.white,
  },
  sortText: {
    fontSize: 12,
    fontFamily: "Montserrat",
    color: colors.black,
  },
});
export default ArticleStyle;
