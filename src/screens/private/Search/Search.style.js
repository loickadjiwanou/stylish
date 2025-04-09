import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const SearchStyle = StyleSheet.create({
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
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
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
    marginBottom: 15,
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
  main: {
    //
  },
  card: {
    backgroundColor: colors.white,
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 8,
  },
  description: {
    fontSize: 12,
    fontFamily: "MontserratLight",
    marginHorizontal: 8,
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    marginHorizontal: 8,
    marginTop: 4,
    marginBottom: 8,
    fontFamily: "Montserrat",
  },
  footer: {
    marginBottom: 200,
  },
  ratingContainerStyle: {
    top: -5,
  },
  ratingSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text6: {
    fontSize: 12,
    fontFamily: "MontserratLight",
    color: colors.gray,
    left: 5,
    top: -7,
  },
  noResultsContainer: {
    marginTop: 10,
  },
  noResultsText: {
    fontFamily: "Montserrat",
    fontSize: 16,
    color: colors.black,
    textAlign: "center",
  },
});
export default SearchStyle;
