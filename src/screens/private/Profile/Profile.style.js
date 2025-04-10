import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const ProfileStyle = StyleSheet.create({
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
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  edit: {
    zIndex: 1,
    position: "absolute",
    bottom: 10,
    right: 0,
    backgroundColor: colors.blue,
    padding: 5,
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.white,
  },
  box: {
    //
  },
  title2: {
    fontFamily: "MontserratBold",
    fontSize: 18,
    color: colors.black,
  },
  fields: {
    marginVertical: 10,
  },
  field: {
    borderWidth: 0.5,
    borderColor: colors.gray,
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: colors.black,
  },
  fieldsTitle: {
    fontFamily: "MontserratLight",
    fontSize: 14,
    color: colors.black,
    marginVertical: 10,
  },
  changePassword: {
    color: colors.red,
    fontSize: 14,
    fontFamily: "Montserrat",
    textAlign: "right",
    marginVertical: 5,
    textDecorationLine: "underline",
  },
  title22: {
    fontFamily: "MontserratBold",
    fontSize: 18,
    color: colors.black,
    marginTop: 40,
  },
  button: {
    marginVertical: 40,
  },
});
export default ProfileStyle;
