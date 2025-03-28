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
});
export default HomeStyle;
