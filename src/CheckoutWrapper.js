import { KkiapayProvider } from "@kkiapay-org/react-native-sdk";
import Checkout from "./screens/private/Checkout/Checkout";

export default function CheckoutWrapper() {
  return (
    <KkiapayProvider>
      <Checkout />
    </KkiapayProvider>
  );
}
