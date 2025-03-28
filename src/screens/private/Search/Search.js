import { View, Text } from "react-native";
import SearchStyle from "./Search.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";

const Search = (props) => {
  return (
    <View style={SearchStyle.view}>
      <View>
        <TopBar />
      </View>
    </View>
  );
};
export default Search;
