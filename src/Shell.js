import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Public Screens
import Splash from "./screens/public/Splash/Splash";
import Splashs from "./screens/public/Splashs/Splashs";
import Login from "./screens/public/Login/Login";
import SignUp from "./screens/public/SignUp/SignUp";
// Private Screens
import Landing from "./screens/private/Landing/Landing";
import Home from "./screens/private/Home/Home";
import Wishlist from "./screens/private/Wishlist/Wishlist";
import Search from "./screens/private/Search/Search";
import Profile from "./screens/private/Profile/Profile";
import Article from "./screens/private/Article/Article";
import Cart from "./screens/private/Cart/Cart";
import BuyNow from "./screens/private/BuyNow/BuyNow";
import CheckoutWrapper from "./CheckoutWrapper";
// Components
import DrawerContent from "./components/DrawerContent/DrawerContent";
// Assets
import colors from "./assets/colors/colors";
// Navigators
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// MMKV
import { getData, saveData } from "./functions/mmkv";

// Save app data
const data = [
  {
    id: "1",
    title: "Women Printed Kurta",
    description: "Neque porro quisquam est qui dolorem ipsum quia",
    oldPrice: "₹ 2499",
    price: "₹ 1500",
    discount: "40%",
    stars: "4.5",
    ratings: 56890,
    image: require("./assets/articles_images/image1.png"),
  },
  {
    id: "2",
    title: "HRX by Hrithik Roshan",
    description: "Neque porro quisquam est qui dolorem ipsum quia",
    oldPrice: "₹ 2499",
    price: "₹ 4999",
    discount: "50%",
    stars: "4.5",
    ratings: 344567,
    image: require("./assets/articles_images/image2.png"),
  },
  {
    id: "3",
    title: "IWC Schaffhausen",
    description: "2021 Pilot's Watch SIHH 2019 44mm",
    oldPrice: "₹ 650",
    price: "₹ 1599",
    discount: "60%",
    stars: "4",
    ratings: 344567,
    image: require("./assets/articles_images/image3.png"),
  },
  {
    id: "4",
    title: "NIke Sneakers",
    description: "Nike Air Jordan Retro 1 Low Mystic Black",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 46890,
    image: require("./assets/articles_images/image4.png"),
  },
  {
    id: "5",
    title: "Labbins",
    description: "Labbin White Sneakers For Men and Female",
    oldPrice: "₹ 650",
    price: "₹ 1250",
    discount: "60%",
    stars: "4",
    ratings: 344567,
    image: require("./assets/articles_images/image5.png"),
  },
  {
    id: "6",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/image6.png"),
  },
];
const wishlist = [
  {
    id: "0",
    title: "HRX by Hrithik Roshan",
    description: "Neque porro quisquam est qui dolorem ipsum quia",
    oldPrice: "₹ 2499",
    price: "₹ 4999",
    discount: "50%",
    stars: "4.5",
    ratings: 344567,
    image: require("./assets/articles_images/mansory2.png"),
  },
  {
    id: "1",
    title: "NIke Sneakers",
    description: "Nike Air Jordan Retro 1 Low Mystic Black",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 46890,
    image: require("./assets/articles_images/mansory4.png"),
  },
  {
    id: "2",
    title: "Women Printed Kurta",
    description: "Neque porro quisquam est qui dolorem ipsum quia",
    oldPrice: "₹ 2499",
    price: "₹ 1500",
    discount: "40%",
    stars: "4.5",
    ratings: 56890,
    image: require("./assets/articles_images/mansory9.png"),
  },
  {
    id: "3",
    title: "HRX by Hrithik Roshan",
    description: "Neque porro quisquam est qui dolorem ipsum quia",
    oldPrice: "₹ 2499",
    price: "₹ 4999",
    discount: "50%",
    stars: "4.5",
    ratings: 344567,
    image: require("./assets/articles_images/mansory2.png"),
  },
  {
    id: "4",
    title: "IWC Schaffhausen",
    description: "2021 Pilot's Watch SIHH 2019 44mm",
    oldPrice: "₹ 650",
    price: "₹ 1599",
    discount: "60%",
    stars: "4",
    ratings: 344567,
    image: require("./assets/articles_images/mansory3.png"),
  },
  {
    id: "5",
    title: "Labbins",
    description: "Labbin White Sneakers For Men and Female",
    oldPrice: "₹ 650",
    price: "₹ 1250",
    discount: "60%",
    stars: "4",
    ratings: 344567,
    image: require("./assets/articles_images/mansory5.png"),
  },
  {
    id: "6",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory6.png"),
  },
  {
    id: "7",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory7.png"),
  },
  {
    id: "8",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory8.png"),
  },
  {
    id: "9",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory1.png"),
  },
  {
    id: "10",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory10.png"),
  },
  {
    id: "11",
    title: "Women Printed Kurta",
    description: "Neque porro quisquam est qui dolorem ipsum quia",
    oldPrice: "₹ 2499",
    price: "₹ 1500",
    discount: "40%",
    stars: "4.5",
    ratings: 56890,
    image: require("./assets/articles_images/mansory9.png"),
  },
  {
    id: "12",
    title: "HRX by Hrithik Roshan",
    description: "Neque porro quisquam est qui dolorem ipsum quia",
    oldPrice: "₹ 2499",
    price: "₹ 4999",
    discount: "50%",
    stars: "4.5",
    ratings: 344567,
    image: require("./assets/articles_images/mansory2.png"),
  },
  {
    id: "13",
    title: "IWC Schaffhausen",
    description: "2021 Pilot's Watch SIHH 2019 44mm",
    oldPrice: "₹ 650",
    price: "₹ 1599",
    discount: "60%",
    stars: "4",
    ratings: 344567,
    image: require("./assets/articles_images/mansory3.png"),
  },
  {
    id: "14",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory11.png"),
  },
  {
    id: "15",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory12.png"),
  },
  {
    id: "16",
    title: "Labbins",
    description: "Labbin White Sneakers For Men and Female",
    oldPrice: "₹ 650",
    price: "₹ 1250",
    discount: "60%",
    stars: "4",
    ratings: 344567,
    image: require("./assets/articles_images/mansory5.png"),
  },
  {
    id: "17",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory6.png"),
  },
  {
    id: "18",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory7.png"),
  },
  {
    id: "19",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory8.png"),
  },
  {
    id: "20",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory1.png"),
  },
  {
    id: "21",
    title: "NIke Sneakers",
    description: "Mid Peach Mocha Shoes For Man White Black Pink S...",
    oldPrice: null,
    price: "₹ 1900",
    discount: null,
    stars: "4.5",
    ratings: 256890,
    image: require("./assets/articles_images/mansory7.png"),
  },
];

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 65,
          paddingBottom: 5,
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{ color, fontSize: 12, fontFamily: "Montserrat", top: 2 }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{ color, fontSize: 12, fontFamily: "Montserrat", top: 2 }}
            >
              Wishlist
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? colors.red : colors.white,
                borderRadius: 50,
                width: 60,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
                shadowColor: colors.black,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
              }}
            >
              <Feather
                name="shopping-cart"
                size={size}
                color={focused ? colors.white : color}
              />
            </View>
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color,
                fontSize: 12,
                fontFamily: "Montserrat",
                top: 2,
                display: "none",
              }}
            >
              Cart
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{ color, fontSize: 12, fontFamily: "Montserrat", top: 2 }}
            >
              Search
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{ color, fontSize: 12, fontFamily: "Montserrat", top: 2 }}
            >
              Profile
            </Text>
          ),
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
};

// Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: 315, backgroundColor: colors.white },
        drawerActiveTintColor: colors.black,
        drawerInactiveTintColor: colors.black,
        drawerActiveBackgroundColor: colors.transparent,
        drawerLabelStyle: {
          fontSize: 14,
          fontFamily: "Montserrat",
        },
      }}
    >
      <Drawer.Screen
        name="Homee"
        component={BottomTabNavigator}
        options={{ drawerItemStyle: { display: "none" } }}
      />
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
    </Drawer.Navigator>
  );
};

const Shell = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserData = async () => {
      await saveData("articles", data);
      await saveData("wishlistarticles", wishlist);

      try {
        const userData = await getData("userData");
        if (userData && Object.keys(userData).length > 0) {
          setUserLoggedIn(true);
        } else {
          setUserLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking user login status:", error);
        setUserLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserData();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.white,
        }}
      >
        <Image
          source={require("./assets/logos/logoasset.png")}
          style={{ width: 125, height: 100 }}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={userLoggedIn ? "DrawerNavigator" : "Splash"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Splashs" component={Splashs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Article" component={Article} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="BuyNow" component={BuyNow} />
        <Stack.Screen name="Checkout" component={CheckoutWrapper} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Shell;
