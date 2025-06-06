import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import CheckoutStyle from "./Checkout.style.js";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import applepay from "../../../assets/icons/apple.png";
import maestro from "../../../assets/icons/maestro.png";
import paypal from "../../../assets/icons/paypal.png";
import visa from "../../../assets/icons/visa.png";
import momo from "../../../assets/icons/kkiapay.jpeg";
import CustomButton from "../../../components/CustomButton/CustomButton.js";
import colors from "../../../assets/colors/colors.js";
import Modal from "react-native-modal";
import success from "../../../assets/images/starpayment.png";
import dot from "../../../assets/images/dot.png";
import { useKkiapay } from "@kkiapay-org/react-native-sdk";
import { saveData, getData } from "../../../functions/mmkv.js";

const Checkout = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const article = route.params?.article;
  const shippingValue = 30;

  const [selectedMethod, setSelectedMethod] = useState("visa");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    openKkiapayWidget,
    addSuccessListener,
    addFailedListener,
    addKkiapayCloseListener,
  } = useKkiapay();

  useFocusEffect(
    React.useCallback(() => {
      const paymentSuccess = getData("paymentSuccess");
      if (paymentSuccess) {
        setModalVisible(true);
        saveData("paymentSuccess", "false");
        saveData("cartArticles", []);
      }
      return () => {};
    }, [])
  );

  useEffect(() => {
    const successUnsubscribe = addSuccessListener((data) => {
      console.log("PAYMENT_SUCCESS callback triggered:", data);
      saveData("paymentSuccess", "true");
      setModalVisible(true);
      setLoading(false);
    });

    const failureUnsubscribe = addFailedListener((error) => {
      console.log("PAYMENT_FAILED callback triggered:", error);
      setLoading(false);
      Alert.alert("Erreur", "Le paiement a échoué. Veuillez réessayer.");
    });

    const closeUnsubscribe = addKkiapayCloseListener(() => {
      console.log("WIDGET_CLOSED callback triggered");
      setLoading(false);
    });

    return () => {
      if (typeof successUnsubscribe === "function") successUnsubscribe();
      if (typeof failureUnsubscribe === "function") failureUnsubscribe();
      if (typeof closeUnsubscribe === "function") closeUnsubscribe();
    };
  }, []);

  const handlePay = () => {
    if (selectedMethod === "momo") {
      setLoading(true);

      saveData("paymentSuccess", "false");

      try {
        console.log("Opening Kkiapay widget...");
        openKkiapayWidget({
          amount:
            parseInt(article?.price.replace(/[^\d]/g, "")) + shippingValue,
          api_key: "d4740c50d99e11efb9c1454f37708fab",
          sandbox: true,
          email: "stylish@gmail.com",
          phone: "97000000",
        });
      } catch (error) {
        console.error("Error opening Kkiapay widget:", error);
        setLoading(false);
        Alert.alert("Erreur", "Impossible d'initialiser le paiement.");
      }
    } else {
      Alert.alert(
        "Unavailable Payment",
        "This method is not available, please choose another payment method",
        [{ text: "OK" }]
      );
    }
  };

  const handleOnBackDoorPress = () => {
    setModalVisible(false);
    navigation.navigate("DrawerNavigator");
  };

  return (
    <View style={CheckoutStyle.view}>
      <View style={CheckoutStyle.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          style={{ width: 75 }}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={CheckoutStyle.title}>Checkout</Text>

        <View style={{ width: 75 }} />
      </View>

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        vertical
      >
        <View style={CheckoutStyle.paymentDetails}>
          <View style={CheckoutStyle.orderAmounts}>
            <Text style={CheckoutStyle.orderAmountsTitle}>Order Amounts</Text>
            <Text style={CheckoutStyle.orderAmountsValue}>
              {article?.price}
            </Text>
          </View>
          <View style={CheckoutStyle.orderAmounts}>
            <Text style={CheckoutStyle.orderAmountsTitle}>Shipping</Text>
            <Text style={CheckoutStyle.orderAmountsValue}>₹ 30</Text>
          </View>
          <View style={CheckoutStyle.orderAmounts}>
            <Text
              style={[
                CheckoutStyle.orderAmountsTitle,
                { fontFamily: "MontserratBold" },
              ]}
            >
              Total
            </Text>
            <Text
              style={[
                CheckoutStyle.orderAmountsValue,
                { fontFamily: "MontserratBold" },
              ]}
            >
              ₹ {parseInt(article?.price.replace(/[^\d]/g, "")) + shippingValue}
            </Text>
          </View>
        </View>

        <View style={CheckoutStyle.line} />

        <View>
          <Text style={CheckoutStyle.paymentTitle}>Payment</Text>

          <Pressable
            onPress={() => setSelectedMethod("visa")}
            style={[
              CheckoutStyle.paymentMethods,
              selectedMethod === "visa" && CheckoutStyle.selectedMethod,
            ]}
          >
            <Image source={visa} style={CheckoutStyle.visa} />
            <Text style={CheckoutStyle.cardNumber}>*********2109</Text>
          </Pressable>

          <Pressable
            onPress={() => setSelectedMethod("paypal")}
            style={[
              CheckoutStyle.paymentMethods,
              selectedMethod === "paypal" && CheckoutStyle.selectedMethod,
            ]}
          >
            <Image source={paypal} style={CheckoutStyle.visa} />
            <Text style={CheckoutStyle.cardNumber}>*********2109</Text>
          </Pressable>

          <Pressable
            onPress={() => setSelectedMethod("maestro")}
            style={[
              CheckoutStyle.paymentMethods,
              selectedMethod === "maestro" && CheckoutStyle.selectedMethod,
            ]}
          >
            <Image source={maestro} style={CheckoutStyle.visa} />
            <Text style={CheckoutStyle.cardNumber}>*********2109</Text>
          </Pressable>

          <Pressable
            onPress={() => setSelectedMethod("applepay")}
            style={[
              CheckoutStyle.paymentMethods,
              selectedMethod === "applepay" && CheckoutStyle.selectedMethod,
            ]}
          >
            <Image source={applepay} style={CheckoutStyle.visa} />
            <Text style={CheckoutStyle.cardNumber}>*********2109</Text>
          </Pressable>

          <Pressable
            onPress={() => setSelectedMethod("momo")}
            style={[
              CheckoutStyle.paymentMethods,
              selectedMethod === "momo" && CheckoutStyle.selectedMethod,
            ]}
          >
            <Image source={momo} style={CheckoutStyle.momo} />
            <Text style={CheckoutStyle.cardNumber}>*********2109</Text>
          </Pressable>
        </View>

        <View style={CheckoutStyle.button}>
          <CustomButton
            title="Continue"
            textColor={colors.white}
            borderColor={colors.red}
            buttonHeight={65}
            buttonWidth={"100%"}
            titleSize={18}
            color={colors.red}
            handlePress={handlePay}
            loaderColor={colors.white}
            loading={loading}
          />
        </View>

        <Modal
          isVisible={modalVisible}
          onBackdropPress={handleOnBackDoorPress}
          style={CheckoutStyle.modal}
          animationIn="fadeInDown"
          animationOut="fadeOutUp"
          backdropOpacity={0.5}
        >
          <View style={CheckoutStyle.modalContent}>
            <View style={CheckoutStyle.modalLogo}>
              <Image source={success} style={CheckoutStyle.success} />
              <View style={CheckoutStyle.check}>
                <MaterialIcons name="check" size={50} color={colors.white} />
              </View>
            </View>
            <Image source={dot} style={CheckoutStyle.dot1} />
            <Image source={dot} style={CheckoutStyle.dot2} />
            <Image source={dot} style={CheckoutStyle.dot3} />
            <Image source={dot} style={CheckoutStyle.dot4} />
            <Image source={dot} style={CheckoutStyle.dot5} />
            <Image source={dot} style={CheckoutStyle.dot6} />
            <Text style={CheckoutStyle.modalText}>
              Payment done successfully.
            </Text>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Checkout;
