import { View, Text } from "react-native";
import ProfileStyle from "./Profile.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";

const Profile = (props) => {
  return (
    <View style={ProfileStyle.view}>
      <View>
        <TopBar />
      </View>
    </View>
  );
};
export default Profile;
