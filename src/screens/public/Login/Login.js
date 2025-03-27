import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import LoginStyle from "./Login.style.js";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = (props) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");

  return (
    <View style={LoginStyle.view}>
      <Text style={LoginStyle.title}>Welcome{"\n"}Back!</Text>

      <View style={LoginStyle.field}>
        <View style={LoginStyle.fieldIcon}>
          <FontAwesome name="user" size={25} color="gray" />
        </View>

        <TextInput
          placeholder="Username or Email"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={LoginStyle.fieldInput}
        />
      </View>
    </View>
  );
};
export default Login;
