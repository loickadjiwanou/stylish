import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const DrawerContentStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
  head: {
    backgroundColor: colors.verylightgray,
    paddingHorizontal: 10,
    paddingTop: 60,
    paddingBottom: 25,
  },
  avatarContainer: {
    alignSelf: "center",
    borderRadius: 100,
    borderColor: colors.gray,
    borderWidth: 3,
    elevation: 10,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 100,
    borderColor: colors.white,
    borderWidth: 3,
  },
  content1: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  name: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "RobotoBold",
  },
  email: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Montserrat",
    color: colors.darkgray2,
  },
  company: {
    textAlign: "center",
    fontSize: 14,
    marginVertical: 5,
    fontFamily: "Montserrat",
    color: colors.darkgray2,
  },
  role: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Montserrat",
    color: colors.redwine,
  },
  content2: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  align: {
    justifyContent: "center",
  },
  modifier: {
    right: 5,
    color: colors.buttongreen,
  },
  linehead: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  lineheadtitle: {
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  footer: {
    paddingVertical: 10,
    // backgroundColor: colors.verylightgray,
  },
  deconnectContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  deconnectTxt: {
    color: colors.red4,
    fontSize: 14,
    fontFamily: "Montserrat",
    left: 5,
  },
  version: {
    textAlign: "center",
    color: colors.darkgray2,
    fontSize: 12,
    fontFamily: "Montserrat",
    marginTop: 15,
  },
  mainScroll: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  shared: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  exploitations: {
    paddingLeft: 75,
    marginTop: 5,
  },
  exploitationsElement: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  exploitationsName: {
    left: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  shareTxt: {
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  settings: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  exploitations: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingLeft: 8,
    paddingRight: 10,
  },
  parametres: {
    left: 10,
  },
});
export default DrawerContentStyle;
