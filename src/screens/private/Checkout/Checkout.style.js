import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const CheckoutStyle = StyleSheet.create({
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
  title: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    color: colors.black,
  },
  paymentDetails: {
    //
  },
  orderAmounts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  orderAmountsTitle: {
    fontFamily: "MontserratLight",
    fontSize: 16,
    color: colors.black,
  },
  orderAmountsValue: {
    fontFamily: "MontserratLight",
    fontSize: 16,
    color: colors.black,
  },
  line: {
    borderBottomWidth: 0.5,
    width: "100%",
    borderBottomColor: colors.gray,
    marginVertical: 30,
  },
  paymentTitle: {
    fontFamily: "MontserratBold",
    fontSize: 18,
    color: colors.black,
  },
  paymentMethods: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "transparent",
    padding: 20,
    borderRadius: 10,
    marginTop: 25,
  },
  selectedMethod: {
    borderColor: colors.red,
  },
  button: {
    marginVertical: 40,
  },
  cardNumber: {
    fontFamily: "MontserratLight",
    fontSize: 15,
    color: colors.black,
  },
  modal: {
    justifyContent: "center",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 30,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  success: {
    alignSelf: "center",
  },
  modalText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.black,
    textAlign: "center",
    marginVertical: 10,
  },
  modalLogo: {
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  check: {
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },
  dot1: {
    position: "absolute",
    zIndex: 1,
    left: 80,
    top: 35,
    width: 30,
    height: 30,
  },
  dot2: {
    position: "absolute",
    zIndex: 1,
    left: 105,
    bottom: 85,
    width: 20,
    height: 20,
  },
  dot3: {
    position: "absolute",
    zIndex: 1,
    right: 100,
    top: 60,
    width: 30,
    height: 30,
  },
  dot4: {
    position: "absolute",
    zIndex: 1,
    left: 102,
    bottom: 130,
    width: 15,
    height: 15,
  },
  dot5: {
    position: "absolute",
    zIndex: 1,
    right: 135,
    bottom: 105,
    width: 15,
    height: 15,
  },
  dot6: {
    position: "absolute",
    zIndex: 1,
    right: 172,
    top: 30,
    width: 15,
    height: 15,
  },
  momo: {
    width: 50,
    height: 20,
  },
});
export default CheckoutStyle;
