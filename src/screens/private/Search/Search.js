import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import SearchStyle from "./Search.style.js";
import TopBar from "../../../components/TopBar/TopBar.js";
import colors from "../../../assets/colors/colors.js";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import StarRating from "../../../components/StarRating/StarRating.js";
import { getData, saveData } from "../../../functions/mmkv.js";

const Search = (props) => {
  const navigation = useNavigation();
  const [screenLoader, setScreenLoader] = useState(true);
  const [search, setSearch] = useState("");

  const activityIndicator = () => {
    return (
      <View style={SearchStyle.activityIndicator}>
        <ActivityIndicator size="small" color={colors.black} />
      </View>
    );
  };

  // articles data
  const [wishlist, setWishlist] = useState([]);
  const [filteredWishlist, setFilteredWishlist] = useState([]);

  useEffect(() => {
    const getArticleData = async () => {
      const data = await getData("wishlistarticles");
      if (data) {
        setWishlist(data);
        setFilteredWishlist(data);
      }
      setScreenLoader(false);
    };
    getArticleData();
  }, []);

  const leftColumn = [];
  const rightColumn = [];

  filteredWishlist.forEach((item, index) => {
    if (index % 2 === 0) {
      leftColumn.push(item);
    } else {
      rightColumn.push(item);
    }
  });

  const handleStars = async (id, newStar) => {
    const updatedArticles = filteredWishlist.map((item) =>
      item.id === id ? { ...item, stars: newStar } : item
    );

    setFilteredWishlist(updatedArticles);

    await saveData("wishlistarticles", updatedArticles);
  };

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredWishlist(wishlist);
    } else {
      const filtered = wishlist.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredWishlist(filtered);
    }
  }, [search]);

  const filterWishlist = (searchText) => {
    const searchLower = searchText.toLowerCase();

    if (searchText === "") {
      setFilteredWishlist(wishlist);
      return;
    }

    const filtered = wishlist.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
    );

    setFilteredWishlist(filtered);
  };

  const handleSearchChange = (text) => {
    setSearch(text);
    filterWishlist(text);
  };

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    const timer = setTimeout(() => {
      setRefreshing(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  const renderItem = (item, index) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Article", { article: item })}
      style={SearchStyle.card}
      key={index}
    >
      <Image source={item.image} style={SearchStyle.image} resizeMode="cover" />
      <Text style={SearchStyle.title}>{item.title}</Text>
      <Text style={SearchStyle.description}>{item.description}</Text>
      <Text style={SearchStyle.price}>{item.price}</Text>
      <View style={SearchStyle.ratingSection}>
        <View style={SearchStyle.ratingContainerStyle}>
          <StarRating
            rating={item.stars}
            onRate={(newRating) => handleStars(item.id, newRating)}
            from={"flatlist"}
          />
        </View>
        <Text style={SearchStyle.text6}>{item?.ratings}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={SearchStyle.view}>
      <TopBar />
      <View style={SearchStyle.searchComponent}>
        <View style={SearchStyle.iconBox}>
          <AntDesign
            name="search1"
            size={24}
            color={colors.gray}
            style={SearchStyle.icon}
          />
        </View>
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={handleSearchChange}
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
      </View>

      <View style={SearchStyle.topLayer}>
        <Text style={SearchStyle.topLayerTitle}>
          {filteredWishlist.length - 2}+ Iteams
        </Text>

        <View style={SearchStyle.sortBox}>
          <TouchableOpacity style={SearchStyle.sort}>
            <Text style={SearchStyle.sortText}>Sort</Text>
            <FontAwesome name="sort" size={20} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={SearchStyle.sort}>
            <Text style={SearchStyle.sortText}>Filter</Text>
            <MaterialCommunityIcons
              name="filter-outline"
              size={20}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>

      {screenLoader ? (
        activityIndicator()
      ) : (
        <View style={SearchStyle.main}>
          {filteredWishlist.length > 0 ? (
            <ScrollView
              vertical
              overScrollMode="never"
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 1, marginRight: 6 }}>
                  {leftColumn.map((item, index) => renderItem(item, index))}
                </View>
                <View style={{ flex: 1, marginLeft: 6 }}>
                  {rightColumn.map((item, index) => renderItem(item, index))}
                </View>
              </View>
              <View style={SearchStyle.footer} />
            </ScrollView>
          ) : (
            <View style={SearchStyle.noResultsContainer}>
              <Text style={SearchStyle.noResultsText}>
                Aucun résultat trouvé pour "{search}"
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};
export default Search;
