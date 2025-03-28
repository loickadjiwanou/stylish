import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import WishlistStyle from "./Wishlist.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../assets/colors/colors.js";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Wishlist = (props) => {
  const navigation = useNavigation();
  const [screenLoader, setScreenLoader] = useState(true);
  const [search, setSearch] = useState("");

  const activityIndicator = () => {
    return (
      <View style={HomeStyle.activityIndicator}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={WishlistStyle.view}>
      <TopBar />
      <View style={WishlistStyle.searchComponent}>
        <View style={WishlistStyle.iconBox}>
          <AntDesign
            name="search1"
            size={24}
            color={colors.gray}
            style={WishlistStyle.icon}
          />
        </View>
        <TextInput
          placeholder="Search"
          value={search}
          onChange={(text) => setSearch(text)}
          style={WishlistStyle.input}
        />
        <View style={WishlistStyle.iconBox}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color={colors.gray}
            style={WishlistStyle.icon}
          />
        </View>
      </View>

      <View style={WishlistStyle.topLayer}>
        <Text style={WishlistStyle.topLayerTitle}>52,082+ Iteams</Text>

        <View style={WishlistStyle.sortBox}>
          <TouchableOpacity style={WishlistStyle.sort}>
            <Text style={WishlistStyle.sortText}>Sort</Text>
            <FontAwesome name="sort" size={20} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={WishlistStyle.sort}>
            <Text style={WishlistStyle.sortText}>Filter</Text>
            <MaterialCommunityIcons
              name="filter-outline"
              size={20}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Wishlist;
