import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const DrawerContentStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
  head: {
    backgroundColor: colors.lightgray,
    paddingHorizontal: 10,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray2,
  },
  logo: {
    width: 112,
    height: 38,
    alignSelf: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
    marginVertical: 20,
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 16,
    color: colors.black,
    marginLeft: 15,
  },
  version: {
    position: "absolute",
    bottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  versionText: {
    fontFamily: "MontserratLight",
    fontSize: 12,
    color: colors.black,
  },
});
export default DrawerContentStyle;
