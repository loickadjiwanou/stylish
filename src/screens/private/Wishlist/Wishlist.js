import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  RefreshControl,
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
import StarRating from "../../../components/StarRating/StarRating.js";

const Wishlist = (props) => {
  const navigation = useNavigation();
  const [screenLoader, setScreenLoader] = useState(true);
  const [search, setSearch] = useState("");

  const activityIndicator = () => {
    return (
      <View style={WishlistStyle.activityIndicator}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  };

  // Articles data
  const wishlist = [
    {
      id: "0",
      title: "HRX by Hrithik Roshan",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹2499",
      price: "₹4999",
      discount: "50%",
      stars: "4.5",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory2.png"),
    },
    {
      id: "1",
      title: "NIke Sneakers",
      description: "Nike Air Jordan Retro 1 Low Mystic Black",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 46890,
      image: require("../../../assets/articles_images/mansory4.png"),
    },
    {
      id: "2",
      title: "Women Printed Kurta",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹2499",
      price: "₹1500",
      discount: "40%",
      stars: "4.5",
      ratings: 56890,
      image: require("../../../assets/articles_images/mansory9.png"),
    },
    {
      id: "3",
      title: "HRX by Hrithik Roshan",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹2499",
      price: "₹4999",
      discount: "50%",
      stars: "4.5",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory2.png"),
    },
    {
      id: "4",
      title: "IWC Schaffhausen",
      description: "2021 Pilot's Watch SIHH 2019 44mm",
      oldPrice: "₹650",
      price: "₹1599",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory3.png"),
    },
    {
      id: "5",
      title: "Labbins",
      description: "Labbin White Sneakers For Men and Female",
      oldPrice: "₹650",
      price: "₹1250",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory5.png"),
    },
    {
      id: "6",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory6.png"),
    },
    {
      id: "7",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory7.png"),
    },
    {
      id: "8",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory8.png"),
    },
    {
      id: "9",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory1.png"),
    },
    {
      id: "10",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory10.png"),
    },
    {
      id: "11",
      title: "Women Printed Kurta",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹2499",
      price: "₹1500",
      discount: "40%",
      stars: "4.5",
      ratings: 56890,
      image: require("../../../assets/articles_images/mansory9.png"),
    },
    {
      id: "12",
      title: "HRX by Hrithik Roshan",
      description: "Neque porro quisquam est qui dolorem ipsum quia",
      oldPrice: "₹2499",
      price: "₹4999",
      discount: "50%",
      stars: "4.5",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory2.png"),
    },
    {
      id: "13",
      title: "IWC Schaffhausen",
      description: "2021 Pilot's Watch SIHH 2019 44mm",
      oldPrice: "₹650",
      price: "₹1599",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory3.png"),
    },
    {
      id: "14",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory11.png"),
    },
    {
      id: "15",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory12.png"),
    },
    {
      id: "16",
      title: "Labbins",
      description: "Labbin White Sneakers For Men and Female",
      oldPrice: "₹650",
      price: "₹1250",
      discount: "60%",
      stars: "4",
      ratings: 344567,
      image: require("../../../assets/articles_images/mansory5.png"),
    },
    {
      id: "17",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory6.png"),
    },
    {
      id: "18",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory7.png"),
    },
    {
      id: "19",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory8.png"),
    },
    {
      id: "20",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory1.png"),
    },
    {
      id: "21",
      title: "NIke Sneakers",
      description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
      oldPrice: null,
      price: "₹1900",
      discount: null,
      stars: "4.5",
      ratings: 256890,
      image: require("../../../assets/articles_images/mansory7.png"),
    },
  ];

  const [filteredWishlist, setFilteredWishlist] = useState(wishlist);

  const leftColumn = [];
  const rightColumn = [];

  filteredWishlist.forEach((item, index) => {
    if (index % 2 === 0) {
      leftColumn.push(item);
    } else {
      rightColumn.push(item);
    }
  });

  const handleStars = (id, newStar) => {
    console.log("Id:", id, "New Star:", newStar);
    setArticles((prevArticles) =>
      prevArticles.map((item) =>
        item.id === id ? { ...item, stars: newStar } : item
      )
    );
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

  useEffect(() => {
    setFilteredWishlist(wishlist);

    const timer = setTimeout(() => {
      setScreenLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderItem = (item, index) => (
    <View style={WishlistStyle.card} key={index}>
      <Image
        source={item.image}
        style={WishlistStyle.image}
        resizeMode="cover"
      />
      <Text style={WishlistStyle.title}>{item.title}</Text>
      <Text style={WishlistStyle.description}>{item.description}</Text>
      <Text style={WishlistStyle.price}>{item.price}</Text>
      <View style={WishlistStyle.ratingSection}>
        <View style={WishlistStyle.ratingContainerStyle}>
          <StarRating
            rating={item.stars}
            onRate={(newRating) => handleStars(item.id, newRating)}
            from={"flatlist"}
          />
        </View>
        <Text style={WishlistStyle.text6}>{item?.ratings}</Text>
      </View>
    </View>
  );

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
          onChangeText={handleSearchChange}
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

      {screenLoader ? (
        activityIndicator()
      ) : (
        <View style={WishlistStyle.main}>
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
              <View style={WishlistStyle.footer} />
            </ScrollView>
          ) : (
            <View style={WishlistStyle.noResultsContainer}>
              <Text style={WishlistStyle.noResultsText}>
                Aucun résultat trouvé pour "{search}"
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};
export default Wishlist;
