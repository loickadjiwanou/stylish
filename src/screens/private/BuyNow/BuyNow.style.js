import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const BuyNowStyle = StyleSheet.create({
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
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    color: colors.black,
  },
  image: {
    width: 125,
    height: 155,
    borderRadius: 5,
  },
  elementImage: {
    width: wp("32%"),
  },
  element: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  elementIn: {
    width: wp("62%"),
  },
  title: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    color: colors.black,
  },
  description: {
    fontSize: 13,
    fontFamily: "MontserratLight",
    color: colors.black,
  },
  picker: {
    borderRadius: 10,
    height: 40,
    width: 100,
    justifyContent: "center",
  },
  elementTxtsBlocs: {
    paddingHorizontal: 10,
  },
  pickersBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    marginRight: 2,
    fontSize: 14,
    fontFamily: "MontserratLight",
    color: colors.black,
  },
  delivery: {
    fontFamily: "MontserratLight",
    fontSize: 16,
    color: colors.black,
  },
  deliveryDate: {
    fontFamily: "MontserratBold",
  },
  coupon: {
    width: 250,
    alignItems: "center",
    flexDirection: "row",
  },
  couponLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 40,
  },
  couponText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.black,
    marginLeft: 15,
  },
  couponSelectText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: colors.red,
  },
  line: {
    borderBottomWidth: 0.5,
    width: "100%",
    borderBottomColor: colors.gray,
  },
  paymentDetails: {
    marginVertical: 40,
  },
  paymentDetailsTitle: {
    fontFamily: "MontserratBold",
    fontSize: 17,
    color: colors.black,
  },
  orderAmounts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  orderAmounts2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderAmountsTitle: {
    fontFamily: "Montserrat",
    fontSize: 16,
    color: colors.black,
  },
  orderAmountsValue: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.black,
  },
  orderAmountsTitle2: {
    fontFamily: "Montserrat",
    fontSize: 12,
    color: colors.black,
  },
  payment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 40,
  },
  paymentButton: {
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 16,
  },
  paymentButtonText: {
    fontFamily: "MontserratBold",
    fontSize: 17,
    color: colors.white,
  },
});
export default BuyNowStyle;
