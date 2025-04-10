import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const CartStyle = StyleSheet.create({
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
    marginBottom: 20,
  },
  topBarLeft: {
    width: "20%",
  },
  topBarTitle: {
    fontFamily: "MontserratBold",
    color: colors.black,
    fontSize: 18,
  },
  topBarRight: {
    width: "20%",
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: colors.black,
    fontFamily: "MontserratBold",
    marginLeft: 10,
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: "Montserrat",
  },
  addressText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: "MontserratLight",
    lineHeight: 24,
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.black,
    marginBottom: 20,
  },
  line: {
    borderBottomWidth: 0.5,
    width: "100%",
    borderBottomColor: colors.gray,
  },
  payment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 20,
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
  paymentButton: {
    //
  },
  image: {
    width: 150,
    height: 160,
    borderRadius: 10,
  },
  cardUp: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    width: wp("58%"),
    padding: 10,
  },
  titleElement: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.black,
  },
  elementImage: {
    width: wp("32%"),
  },
  variations: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  variationsText: {
    fontFamily: "MontserratBold",
    fontSize: 14,
    color: colors.black,
  },
  variations1: {
    borderWidth: 0.5,
    borderColor: colors.black,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 5,
  },
  variationsText2: {
    fontFamily: "MontserratLight",
    fontSize: 12,
    color: colors.black,
  },
  ratingsText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: colors.black,
    width: 30,
  },
  ratings: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  line2: {
    borderBottomWidth: 0.5,
    width: "100%",
    borderBottomColor: colors.gray,
    marginVertical: 10,
    opacity: 0.5,
  },
  cardDown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  totalOrder: {
    fontFamily: "Montserrat",
    fontSize: 12,
    color: colors.black,
  },
  totalPrice: {
    fontFamily: "MontserratBold",
    fontSize: 12,
    color: colors.black,
    right: 10,
  },
});
export default CartStyle;
