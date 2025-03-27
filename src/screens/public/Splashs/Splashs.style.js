import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const SplashsStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 40,
    justifyContent: "center",
    // alignItems: "center",
  },
  index: {
    color: colors.gray,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  skip: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  header: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  wrapper: {
    // flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: -90,
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
  image2: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
    top: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.black,
    fontFamily: "MontserratBold",
    top: 10,
  },
  description: {
    fontSize: 16,
    color: colors.black,
    marginTop: 10,
    opacity: 0.5,
    textAlign: "center",
    fontFamily: "Montserrat",
    top: 15,
    width: wp("90%"),
  },
  pagination: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    backgroundColor: "white",
  },
  dotIcon: {
    marginHorizontal: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    backgroundColor: "#888",
    marginHorizontal: 5,
    backgroundColor: colors.gray,
  },
  activeDot: {
    width: 40,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    backgroundColor: colors.black,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    width: wp("100%"),
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  nav: {
    color: colors.red,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});
export default SplashsStyle;
