import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,
  ToastAndroid,
} from "react-native";
import LoginStyle from "./Login.style.js";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../assets/colors/colors.js";
import CustomButton from "../../../components/CustomButton/CustomButton.js";
import { getData } from "../../../functions/mmkv.js";

const Login = (props) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const storedUser = await getData("userData");

      if (!storedUser) {
        setLoading(false);
        alert("No account found, please sign up first.");
        return;
      }

      if (
        storedUser.username === username &&
        storedUser.password === password
      ) {
        setTimeout(() => {
          setLoading(false);
          ToastAndroid.show("Login successful", ToastAndroid.SHORT);
          navigation.navigate("Landing");
        }, 1000);
      } else {
        setTimeout(() => {
          setLoading(false);
          alert("Invalid username or password.");
        }, 1000);
      }
    } catch (error) {
      console.error("Error during login: ", error);
      setLoading(false);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      vertical
      style={LoginStyle.view}
    >
      <Text style={LoginStyle.title}>Welcome{"\n"}Back!</Text>

      <View style={LoginStyle.field}>
        <View style={LoginStyle.fieldIcon}>
          <FontAwesome name="user" size={20} color={colors.gray} />
        </View>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor={colors.gray}
          // autoCapitalize="words"
          // autoCorrect={false}
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={LoginStyle.fieldInput}
        />
      </View>

      <View style={LoginStyle.field}>
        <View style={LoginStyle.fieldIcon}>
          <FontAwesome name="user" size={20} color={colors.gray} />
        </View>
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.gray}
          // autoCapitalize="words"
          // autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={LoginStyle.fieldInputPassword}
          secureTextEntry={!togglePassword}
        />
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setTogglePassword(!togglePassword);
          }}
          hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
          style={LoginStyle.fieldEyeIcon}
        >
          <Feather
            name={togglePassword ? "eye-off" : "eye"}
            size={20}
            color={colors.gray}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        // onPress={() => navigation.navigate("ForgotPassword")}
        onPress={() => {}}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        style={LoginStyle.forgot}
      >
        <Text style={LoginStyle.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={LoginStyle.button}>
        <CustomButton
          title="Login"
          textColor={colors.white}
          borderColor={colors.red}
          buttonHeight={55}
          color={colors.red}
          handlePress={handleLogin}
          loaderColor={colors.white}
          loading={loading}
        />
      </View>

      <View style={LoginStyle.bottom}>
        <Text style={LoginStyle.bottomText}>Create An Account </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={LoginStyle.bottomButton}
        >
          <Text style={LoginStyle.bottomButtonText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Login;
