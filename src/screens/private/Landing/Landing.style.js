import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const LandingStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: wp("100%"),
    height: hp("100%"),
    resizeMode: "cover",
  },
  zone: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: colors.white,
    fontSize: 34,
    fontFamily: "MontserratBold",
    textAlign: "center",
  },
  text2: {
    color: colors.white,
    opacity: 0.8,
    fontSize: 14,
    fontFamily: "Montserrat",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    width: wp("80%"),
    marginTop: 40,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "42%",
  },
});
export default LandingStyle;
