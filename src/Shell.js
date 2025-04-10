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
import Checkout from "./screens/private/Checkout/Checkout";
// Components
import DrawerContent from "./components/DrawerContent/DrawerContent";
// Assets
import colors from "./assets/colors/colors";
// Navigators
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// MMKV
import { getData } from "./functions/mmkv";

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
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Shell;
