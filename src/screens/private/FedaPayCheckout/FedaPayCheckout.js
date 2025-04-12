import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
  AppState,
} from "react-native";
import CheckoutStyle from "../Checkout/Checkout.style.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import CustomButton from "../../../components/CustomButton/CustomButton.js";
import colors from "../../../assets/colors/colors.js";
import axios from "axios";
import { WebView } from "react-native-webview";
import { saveData } from "../../../functions/mmkv.js";

const FedaPayCheckout = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const article = route.params?.article;
  const shippingValue = 30;
  const totalAmount =
    parseInt(article?.price.replace(/[^\d]/g, "")) + shippingValue;
  const [showWebView, setShowWebView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);
  const [paymentUrl, setPaymentUrl] = useState(null);

  // Gestionnaire d'état de l'application pour détecter le retour depuis le navigateur
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (appState.match(/inactive|background/) && nextAppState === "active") {
        checkPaymentStatus();
      }
      setAppState(nextAppState);
    });

    const urlListener = Linking.addEventListener("url", handleDeepLink);

    return () => {
      subscription.remove();
      urlListener.remove();
    };
  }, [appState]);

  const handleDeepLink = (event) => {
    const { url } = event;
    if (url.includes("status=successful")) {
      Alert.alert(
        "Paiement réussi",
        "Votre paiement a été traité avec succès!",
        [{ text: "OK", onPress: () => navigation.navigate("DrawerNavigator") }]
      );
    } else if (
      url.includes("status=failed") ||
      url.includes("status=canceled")
    ) {
      Alert.alert(
        "Échec du paiement",
        "Le paiement n'a pas pu être traité. Veuillez réessayer.",
        [{ text: "OK", onPress: () => {} }]
      );
    }
  };

  const checkPaymentStatus = async () => {
    //
  };

  const createFedaPayTransaction = async () => {
    try {
      const response = await axios.post(
        "https://sandbox-api.fedapay.com/v1/transactions",
        {
          description: `Paiement de la commande`,
          amount: totalAmount,
          currency: {
            iso: "XOF",
          },
          //   callback_url: "https://maplateforme.com/callback",
          callback_url: "https://stylishpay://payment-callback",
          customer: {
            firstname: "John",
            lastname: "Doe",
            email: "john.doe@example.com",
            phone_number: {
              number: "97808080",
              country: "bj",
            },
          },
        },
        {
          headers: {
            Authorization: "Bearer sk_sandbox_ogli0uXFKSmn8n99bVoX6RAY",
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log("Transaction créée avec succès :", response.data);
      const transactionId = response.data?.["v1/transaction"]?.id;
      //   console.log("Transaction ID:", transactionId);
      return transactionId;
    } catch (error) {
      console.error(
        "Erreur lors de la création de la transaction :",
        error.response?.data || error.message
      );
    }
  };

  const generatePaymentToken = async (transactionId) => {
    try {
      const response = await axios.post(
        `https://sandbox-api.fedapay.com/v1/transactions/${transactionId}/token`,
        {},
        {
          headers: {
            Authorization: "Bearer sk_sandbox_ogli0uXFKSmn8n99bVoX6RAY",
            "Content-Type": "application/json",
          },
        }
      );

      //   console.log("Token de paiement generé:", response.data);
      const paymentLink = response.data.url;
      //   console.log("Lien de paiement:", paymentLink);

      return paymentLink;
    } catch (error) {
      console.error(
        "Erreur lors de la génération du token:",
        error.response?.data || error.message
      );
    }
  };

  const handlePayNow = async () => {
    try {
      setLoading(true);

      const transactionId = await createFedaPayTransaction();

      const paymentUrl = await generatePaymentToken(transactionId);

      //   console.log("Payment URL:", paymentUrl);

      setPaymentUrl(paymentUrl);

      // open in web view
      setShowWebView(true);

      // open in browser
      //   await Linking.openURL(paymentUrl);
    } catch (error) {
      Alert.alert(
        "Erreur",
        "Impossible de créer la transaction. Veuillez réessayer plus tard."
      );
    } finally {
      setLoading(false);
    }
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

        <Text style={CheckoutStyle.title}>Paiement FedaPay</Text>

        <View style={{ width: 75 }} />
      </View>

      {showWebView && paymentUrl ? (
        <>
          {/* <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowFileAccess={true}
            source={{ uri: paymentUrl }}
            style={{ flex: 1 }}
          /> */}
          {/* <WebView
			source={{ uri: paymentUrl }}
			style={{ flex: 1 }}
			javaScriptEnabled={true}  // Important pour autoriser JavaScript
			domStorageEnabled={true}  // Permet d'utiliser le stockage local
			allowFileAccess={true}    // Autorise l'accès aux fichiers locaux si nécessaire
			onNavigationStateChange={(navState) => {
				if (navState.url.includes("status=successful")) {
				// Paiement réussi
				Alert.alert("Paiement réussi", "Votre paiement a été traité avec succès!");
				setShowWebView(false);
				} else if (navState.url.includes("status=failed")) {
				// Paiement échoué
				Alert.alert("Paiement échoué", "Le paiement n'a pas été traité.");
				setShowWebView(false);
				}
			}}
			/> */}
          <WebView
            source={{ uri: paymentUrl }}
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowFileAccess={true}
            onNavigationStateChange={(navState) => {
              console.log("URL de la navigation:", navState.url);
              if (navState.url.includes("status=approved")) {
                Alert.alert(
                  "Paiement réussi",
                  "Votre paiement a été traité avec succès !"
                );
                saveData("cartArticles", []).then(() => {
                  navigation.navigate("DrawerNavigator");
                  setShowWebView(false);
                });
              } else if (navState.url.includes("status=failed")) {
                Alert.alert(
                  "Paiement échoué",
                  "Le paiement n'a pas été traité."
                );
                setShowWebView(false);
              }
            }}
            onShouldStartLoadWithRequest={(event) => {
              return (
                event.url.startsWith("https://") ||
                event.url.includes("success") ||
                event.url.includes("failed")
              );
            }}
          />

          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={() => setShowWebView(false)}
            style={{ alignItems: "center", padding: 20, marginVertical: 10 }}
          >
            <Text
              style={{
                fontsize: 14,
                fontFamily: "Montserrat",
                color: colors.black,
              }}
            >
              Fermer
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={{ flex: 1, padding: 20 }}>
          <View style={CheckoutStyle.paymentDetails}>
            <View style={CheckoutStyle.orderAmounts}>
              <Text style={CheckoutStyle.orderAmountsTitle}>
                Montant de la commande
              </Text>
              <Text style={CheckoutStyle.orderAmountsValue}>
                {article?.price}
              </Text>
            </View>
            <View style={CheckoutStyle.orderAmounts}>
              <Text style={CheckoutStyle.orderAmountsTitle}>
                Frais de livraison
              </Text>
              <Text style={CheckoutStyle.orderAmountsValue}>
                ₹ {shippingValue}
              </Text>
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
                ₹ {totalAmount}
              </Text>
            </View>
          </View>

          <View style={CheckoutStyle.line} />

          <Text
            style={{
              marginTop: 20,
              marginBottom: 10,
              fontSize: 14,
              fontFamily: "MontserratBold",
              color: colors.black,
              textAlign: "justify",
            }}
          >
            Vous allez être redirigé vers le site sécurisé de FedaPay pour
            effectuer votre paiement.
          </Text>

          <Text
            style={{
              marginBottom: 20,
              fontSize: 12,
              fontFamily: "MontserratLight",
              color: colors.black,
              textAlign: "justify",
            }}
          >
            Une fois le paiement effectué, vous serez automatiquement redirigé
            vers l'application.
          </Text>

          <View style={{ marginTop: "auto", marginBottom: 20 }}>
            <CustomButton
              title="Procéder au paiement"
              textColor={colors.white}
              borderColor={colors.red}
              buttonHeight={65}
              buttonWidth={"100%"}
              titleSize={18}
              color={colors.red}
              handlePress={handlePayNow}
              loaderColor={colors.white}
              loading={loading}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default FedaPayCheckout;
