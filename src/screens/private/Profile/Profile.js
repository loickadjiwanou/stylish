import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid,
} from "react-native";
import ProfileStyle from "./Profile.style.js";
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import profilepic from "../../../assets/images/profilepic.png";
import colors from "../../../assets/colors/colors.js";
import CustomButton from "../../../components/CustomButton/CustomButton.js";

const Profile = (props) => {
  const navigation = useNavigation();

  const userData = {
    email: "aashifa@gmail.com",
    password: "klnjbvcfxc",
    pincode: "450116",
    address: "216 St Paul's Rd",
    city: "London",
    state: "N1 2LL",
    country: "United Kingdom",
    bankaccountnumber: "204356777777889",
    accountholdername: "Abhiraj Sisodiya",
    ifsc: "SBIN00428",
  };

  const [email, setEmail] = useState(userData?.email);
  const [password, setPassword] = useState(userData?.password);
  const [pincode, setPincode] = useState(userData?.pincode);
  const [address, setAddress] = useState(userData?.address);
  const [city, setCity] = useState(userData?.city);
  const [state, setState] = useState(userData?.state);
  const [country, setCountry] = useState(userData?.country);
  const [bankaccountnumber, setBankaccountnumber] = useState(
    userData?.bankaccountnumber
  );
  const [accountholdername, setAccountholdername] = useState(
    userData?.accountholdername
  );
  const [ifsc, setIfsc] = useState(userData?.ifsc);

  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show("Informations updated", ToastAndroid.SHORT);
    }, 2000);
  };

  return (
    <View style={ProfileStyle.view}>
      <View style={ProfileStyle.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          style={{ width: 75 }}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={ProfileStyle.title}>Profile</Text>

        <View style={{ width: 75 }} />
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >
        <View style={ProfileStyle.imageContainer}>
          <Image source={profilepic} style={ProfileStyle.image} />
          <View style={ProfileStyle.edit}>
            <FontAwesome name="pencil" size={16} color={colors.white} />
          </View>
        </View>

        <View style={ProfileStyle.box}>
          <Text style={ProfileStyle.title2}>Personal Details</Text>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>Email Address</Text>
            <TextInput
              placeholder={userData?.email}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>Password</Text>
            <TextInput
              placeholder={userData?.password}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              onPress={() => {}}
            >
              <Text style={ProfileStyle.changePassword}>Change Password</Text>
            </TouchableOpacity>
          </View>

          <Text style={ProfileStyle.title22}>Business Address Details</Text>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>Pin code</Text>
            <TextInput
              placeholder={userData?.pincode}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={pincode}
              onChangeText={(text) => setPincode(text)}
            />
          </View>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>Address</Text>
            <TextInput
              placeholder={userData?.address}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
          </View>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>City</Text>
            <TextInput
              placeholder={userData?.city}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={city}
              onChangeText={(text) => setCity(text)}
            />
          </View>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>State</Text>
            <TextInput
              placeholder={userData?.state}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={state}
              onChangeText={(text) => setState(text)}
            />
          </View>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>Country</Text>
            <TextInput
              placeholder={userData?.country}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={country}
              onChangeText={(text) => setCountry(text)}
            />
          </View>

          <Text style={ProfileStyle.title22}>Bank Account Details</Text>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>Bank Account Number</Text>
            <TextInput
              placeholder={userData?.bankaccountnumber}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={bankaccountnumber}
              onChangeText={(text) => setBankaccountnumber(text)}
            />
          </View>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>Account Holder’s Name</Text>
            <TextInput
              placeholder={userData?.accountholdername}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={accountholdername}
              onChangeText={(text) => setAccountholdername(text)}
            />
          </View>

          <View style={ProfileStyle.fields}>
            <Text style={ProfileStyle.fieldsTitle}>IFSC Code</Text>
            <TextInput
              placeholder={userData?.ifsc}
              placeholderTextColor={colors.gray}
              style={ProfileStyle.field}
              value={ifsc}
              onChangeText={(text) => setIfsc(text)}
            />
          </View>

          <View style={ProfileStyle.button}>
            <CustomButton
              title="Save"
              textColor={colors.white}
              borderColor={colors.red}
              buttonHeight={65}
              buttonWidth={"100%"}
              titleSize={18}
              color={colors.red}
              handlePress={handleSave}
              loaderColor={colors.white}
              loading={loading}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Profile;
