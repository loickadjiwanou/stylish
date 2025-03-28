import { View, TouchableOpacity, Image } from "react-native";
import TopBarStyle from "./TopBar.style.js";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import profilepic from "../../assets/images/profilepic.png";
import logoblue from "../../assets/logos/logoblue.png";

const TopBar = (props) => {
  const navigation = useNavigation();

  return (
    <View style={TopBarStyle.view}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        style={TopBarStyle.menu}
      >
        <Entypo name="menu" size={40} color="black" />
      </TouchableOpacity>
      <Image source={logoblue} style={TopBarStyle.logoblue} />
      <Image source={profilepic} style={TopBarStyle.profilepic} />
    </View>
  );
};
export default TopBar;
