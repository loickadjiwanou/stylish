import { View, Text } from "react-native";
import HomeStyle from "./Home.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";

const Home = (props) => {
  return (
    <View style={HomeStyle.view}>
      <View>
        <TopBar />
      </View>
    </View>
  );
};
export default Home;
