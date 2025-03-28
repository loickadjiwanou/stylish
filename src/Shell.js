import React from "react";
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
// Drawer content
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
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: { backgroundColor: colors.white, height: 60 },
      }}
    >
      {/* <Tab.Screen name="Accueil" component={Accueil} /> */}
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
          left: -2,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ drawerItemStyle: { display: "none" } }}
      />
      {/* <Drawer.Screen name="Messagerie" component={Messagerie} /> */}
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
