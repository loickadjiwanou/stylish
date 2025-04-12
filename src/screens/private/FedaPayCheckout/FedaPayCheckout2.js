import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import CheckoutStyle from "../Checkout/Checkout.style.js";
import colors from "../../../assets/colors/colors.js";

const FedaPayCheckout = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const article = route.params?.article;
  const shippingValue = 30;
  const totalAmount =
    parseInt(article?.price.replace(/[^\d]/g, "")) + shippingValue;

  const [isLoading, setIsLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const fedaPayHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Paiement FedaPay</title>
        <script src="https://cdn.fedapay.com/checkout.js?v=1.1.7"></script>
        <style>
          body { 
            margin: 0; 
            padding: 20px; 
            font-family: sans-serif; 
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5f5;
          }
          .payment-container {
            width: 100%;
            max-width: 500px;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .payment-details {
            margin-bottom: 20px;
          }
          .payment-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }
          .payment-total {
            font-weight: bold;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #eee;
          }
          button {
            width: 100%;
            padding: 15px;
            background-color: ${colors.red};
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="payment-container">
          <div class="payment-details">
            <div class="payment-row">
              <span>Montant de la commande</span>
              <span>${article?.price}</span>
            </div>
            <div class="payment-row">
              <span>Frais de livraison</span>
              <span>₹ ${shippingValue}</span>
            </div>
            <div class="payment-row payment-total">
              <span>Total</span>
              <span>₹ ${totalAmount}</span>
            </div>
          </div>
          <button id="pay-btn">Payer ₹ ${totalAmount}</button>
        </div>

        <script type="text/javascript">
          let widget = FedaPay.init({
            public_key: 'pk_sandbox_6uyrZFfE-ffXcwaVjwXbvdk8',
            transaction: {
              amount: ${totalAmount},
              description: 'Achat: ${article?.title || "Article"}'
            },
            customer: {
              email: 'client@example.com',
              firstname: 'Client',
              lastname: 'Example'
            },
            onComplete: function(response) {
              window.ReactNativeWebView.postMessage(JSON.stringify(response));
            }
          });
          
          document.getElementById('pay-btn').addEventListener('click', function() {
            widget.open();
          });
        </script>
      </body>
    </html>
  `;

  // Gérer les messages de WebView
  const handleWebViewMessage = (event) => {
    try {
      const response = JSON.parse(event.nativeEvent.data);
      if (response.status === "successful") {
        setPaymentStatus("success");
        setTimeout(() => {
          Alert.alert(
            "Paiement réussi",
            "Votre paiement a été traité avec succès!",
            [
              {
                text: "OK",
                onPress: () => navigation.navigate("DrawerNavigator"),
              },
            ]
          );
        }, 500);
      } else {
        setPaymentStatus("failed");
        Alert.alert(
          "Échec du paiement",
          "Le paiement n'a pas pu être traité. Veuillez réessayer.",
          [{ text: "OK", onPress: () => {} }]
        );
      }
    } catch (error) {
      console.error("Error processing WebView message:", error);
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

      {isLoading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={colors.red} />
          <Text
            style={{
              marginTop: 10,
              fontFamily: "Montserrat",
              fontSize: 14,
              color: colors.black,
            }}
          >
            Chargement du formulaire de paiement...
          </Text>
        </View>
      )}

      <WebView
        originWhitelist={["*"]}
        source={{ html: fedaPayHtml }}
        onLoadEnd={() => setIsLoading(false)}
        onMessage={handleWebViewMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        style={{ flex: 1, display: isLoading ? "none" : "flex" }}
      />
    </View>
  );
};

export default FedaPayCheckout;
