import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const SignUpStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontFamily: "MontserratBold",
    color: colors.black,
    marginTop: 20,
  },
  field: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 55,
    backgroundColor: colors.lightgray,
  },
  fieldIcon: {
    width: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
  fieldInput: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    color: colors.black,
    paddingHorizontal: 10,
  },
  fieldInputPassword: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    color: colors.black,
    paddingHorizontal: 10,
  },
  fieldEyeIcon: {
    width: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
    left: 5,
  },
  button: {
    marginTop: 40,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  bottomText: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: "Montserrat",
  },
  bottomButton: {
    //
  },
  bottomButtonText: {
    textDecorationLine: "underline",
    fontSize: 16,
    color: colors.red,
    fontFamily: "Montserrat",
  },
  text: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: "Montserrat",
    marginTop: 30,
  },
});
export default SignUpStyle;
