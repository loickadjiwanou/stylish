import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import SearchStyle from "./Search.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";
import colors from "../../../assets/colors/colors.js";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Search = (props) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [screenLoader, setScreenLoader] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      inputRef.current?.focus();
    }, [])
  );

  const activityIndicator = () => {
    return (
      <View style={SearchStyle.activityIndicator}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={SearchStyle.view}>
      <View>
        <TopBar />
      </View>

      <Pressable
        onPress={() => navigation.navigate("Search")}
        style={SearchStyle.searchComponent}
      >
        <View style={SearchStyle.iconBox}>
          <AntDesign
            name="search1"
            size={24}
            color={colors.gray}
            style={SearchStyle.icon}
          />
        </View>
        <TextInput
          ref={inputRef}
          placeholder="Search"
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={SearchStyle.input}
        />
        <View style={SearchStyle.iconBox}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color={colors.gray}
            style={SearchStyle.icon}
          />
        </View>
      </Pressable>

      {screenLoader ? activityIndicator() : <Text>Search</Text>}
    </View>
  );
};
export default Search;
