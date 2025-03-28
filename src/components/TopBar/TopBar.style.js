import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const TopBarStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
});
export default TopBarStyle;
