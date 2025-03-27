import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const LoginStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: "MontserratBold",
    color: colors.black,
    top: 20,
  },
  field: {
    top: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 5,
    // paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  fieldIcon: {
    width: wp("8%"),
    paddingVertical: 5,
    alignItems: "center",
    left: 5,
  },
  fieldInput: {
    width: wp("78%"),
    right: 5,
  },
});
export default LoginStyle;
