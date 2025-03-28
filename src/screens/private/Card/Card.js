import { View, Text } from "react-native";
import CardStyle from "./Card.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";

const Card = (props) => {
  return (
    <View style={CardStyle.view}>
      <View>
        <TopBar />
      </View>
    </View>
  );
};
export default Card;
