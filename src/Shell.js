import React from "react";
import { View, Text, Platform } from "react-native";
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
import Card from "./screens/private/Card/Card";
import Search from "./screens/private/Search/Search";
import Profile from "./screens/private/Profile/Profile";
// Components
import DrawerContent from "./components/DrawerContent/DrawerContent";
// Assets
import colors from "./assets/colors/colors";
// Navigators
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        name="Card"
        component={Card}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: colors.white,
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
              <Feather name="shopping-cart" size={size} color={color} />
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

// Stack Navigator
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Splashs" component={Splashs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const Shell = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Shell;
