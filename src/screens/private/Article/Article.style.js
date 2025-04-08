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
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
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
    width: 50,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
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
});
export default ArticleStyle;
