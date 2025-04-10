import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const TopBarStyle = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  logoblue: {
    width: 112,
    height: 38,
    top: 5,
  },
  profilepic: {
    width: 45,
    height: 45,
  },
  menu: {
    backgroundColor: colors.lightgray,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
export default TopBarStyle;
