import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import HomeStyle from "./Home.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../assets/colors/colors.js";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Home = (props) => {
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
    <View style={HomeStyle.view}>
      <TopBar />

      <View style={HomeStyle.searchComponent}>
        <View style={HomeStyle.iconBox}>
          <AntDesign
            name="search1"
            size={24}
            color={colors.gray}
            style={HomeStyle.icon}
          />
        </View>
        <TextInput
          placeholder="Search"
          value={search}
          onChange={(text) => setSearch(text)}
          style={HomeStyle.input}
        />
        <View style={HomeStyle.iconBox}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color={colors.gray}
            style={HomeStyle.icon}
          />
        </View>
      </View>

      <View style={HomeStyle.topLayer}>
        <Text style={HomeStyle.topLayerTitle}>All Featured</Text>

        <View style={HomeStyle.sortBox}>
          <TouchableOpacity style={HomeStyle.sort}>
            <Text style={HomeStyle.sortText}>Sort</Text>
            <FontAwesome name="sort" size={20} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={HomeStyle.sort}>
            <Text style={HomeStyle.sortText}>Filter</Text>
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
export default Home;
