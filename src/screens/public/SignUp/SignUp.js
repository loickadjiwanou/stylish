import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,
} from "react-native";
import SignUpStyle from "./SignUp.style.js";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../assets/colors/colors.js";
import CustomButton from "../../../components/CustomButton/CustomButton.js";

const SignUp = (props) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Landing");
    }, 2000);
  };

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      vertical
      style={SignUpStyle.view}
    >
      <Text style={SignUpStyle.title}>Create an{"\n"}Account</Text>

      <View style={SignUpStyle.field}>
        <View style={SignUpStyle.fieldIcon}>
          <FontAwesome name="user" size={20} color={colors.gray} />
        </View>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor={colors.gray}
          // autoCapitalize="words"
          // autoCorrect={false}
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={SignUpStyle.fieldInput}
        />
      </View>

      <View style={SignUpStyle.field}>
        <View style={SignUpStyle.fieldIcon}>
          <FontAwesome name="user" size={20} color={colors.gray} />
        </View>
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.gray}
          // autoCapitalize="words"
          // autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={SignUpStyle.fieldInputPassword}
          secureTextEntry={!togglePassword}
        />
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setTogglePassword(!togglePassword);
          }}
          hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
          style={SignUpStyle.fieldEyeIcon}
        >
          <Feather
            name={togglePassword ? "eye-off" : "eye"}
            size={20}
            color={colors.gray}
          />
        </TouchableOpacity>
      </View>

      <View style={SignUpStyle.field}>
        <View style={SignUpStyle.fieldIcon}>
          <FontAwesome name="user" size={20} color={colors.gray} />
        </View>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={colors.gray}
          // autoCapitalize="words"
          // autoCorrect={false}
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          style={SignUpStyle.fieldInputPassword}
          secureTextEntry={!togglePassword2}
        />
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setTogglePassword2(!togglePassword2);
          }}
          hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
          style={SignUpStyle.fieldEyeIcon}
        >
          <Feather
            name={togglePassword2 ? "eye-off" : "eye"}
            size={20}
            color={colors.gray}
          />
        </TouchableOpacity>
      </View>

      <Text style={SignUpStyle.text}>
        By clicking the <Text style={{ color: colors.red }}>Register</Text>{" "}
        button, you agree to the public offer
      </Text>

      <View style={SignUpStyle.button}>
        <CustomButton
          title="Create Account"
          textColor={colors.white}
          borderColor={colors.red}
          buttonHeight={55}
          color={colors.red}
          handlePress={handleSignUp}
          loaderColor={colors.white}
          loading={loading}
        />
      </View>

      <View style={SignUpStyle.bottom}>
        <Text style={SignUpStyle.bottomText}>I Already Have an Account </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={SignUpStyle.bottomButton}
        >
          <Text style={SignUpStyle.bottomButtonText}> Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default SignUp;
