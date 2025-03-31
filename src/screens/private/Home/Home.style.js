import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const HomeStyle = StyleSheet.create({
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
  searchComponent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 12,
    marginVertical: 20,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  iconBox: {
    width: 30,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    //
  },
  input: {
    width: "82%",
  },
  topLayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    backgroundColor: "red",
    width: 65,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  sortText: {
    fontSize: 12,
    fontFamily: "Montserrat",
    color: colors.black,
  },
  categoryBox: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  category: {
    width: 65,
  },
  categoryImage: {
    width: 65,
    height: 65,
  },
  categoryText: {
    fontSize: 10,
    fontFamily: "Montserrat",
    color: colors.black,
    textAlign: "center",
  },
  wrapper: {
    //
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "98%",
    height: 220,
    resizeMode: "contain",
    borderRadius: 20,
    marginTop: -50,
  },
  swiper: {
    height: 270,
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
    top: -5,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    backgroundColor: colors.pink,
    marginHorizontal: 2,
    top: -5,
  },
  swiperTexts: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  swiperText1: {
    fontSize: 20,
    fontFamily: "MontserratBold",
    color: colors.white,
  },
  swiperText2: {
    fontSize: 14,
    fontFamily: "MontserratLight",
    color: colors.white,
    top: 5,
  },
  swiperText3: {
    fontSize: 14,
    fontFamily: "MontserratLight",
    color: colors.white,
    top: 10,
  },
  swiperText4: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: colors.white,
  },
  swiperButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
    paddingHorizontal: 10,
    top: 30,
    borderWidth: 1,
    borderColor: colors.white,
    paddingVertical: 10,
    borderRadius: 8,
  },
  dealBox: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  dealTexts: {
    //
  },
  dealText1: {
    fontSize: 18,
    fontFamily: "Montserrat",
    color: colors.white,
    top: -3,
  },
  dealText2: {
    fontSize: 14,
    fontFamily: "MontserratLight",
    color: colors.white,
  },
  dealText3: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: colors.white,
  },
  dealButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 110,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.white,
    paddingVertical: 10,
    borderRadius: 6,
  },
  dealTime: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: 3,
  },
  dealIcon: {
    marginRight: 8,
  },
});
export default HomeStyle;
