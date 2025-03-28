import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const SplashStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
});
export default SplashStyle;
