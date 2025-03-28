import { View, Text } from "react-native";
import WishlistStyle from "./Wishlist.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";

const Wishlist = (props) => {
  return (
    <View style={WishlistStyle.view}>
      <View>
        <TopBar />
      </View>
    </View>
  );
};
export default Wishlist;
