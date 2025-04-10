import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import CartStyle from "./Cart.style.js";
import colors from "../../../assets/colors/colors.js";
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import {
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  Feather,
} from "@expo/vector-icons";
import CustomButton from "../../../components/CustomButton/CustomButton.js";
import StarRating from "../../../components/StarRating/StarRating.js";
import { getData, saveData } from "../../../functions/mmkv.js";

const Cart = (props) => {
  const navigation = useNavigation();
  const [screenLoader, setScreenLoader] = useState(true);

  const activityIndicator = () => {
    return (
      <View style={CartStyle.activityIndicator}>
        <ActivityIndicator size="small" color={colors.black} />
      </View>
    );
  };

  // articles data
  const [data, setData] = useState([]);

  useEffect(() => {
    const getArticlesCart = async () => {
      const data = await getData("cartArticles");
      if (data) {
        setData(data);
      }
      setScreenLoader(false);
    };

    getArticlesCart();
  }, []);

  const renderElement = (item) => {
    return (
      <View key={item?.id}>
        <View style={CartStyle.cardUp}>
          <View style={CartStyle.elementImage}>
            <Image source={item?.image} style={CartStyle.image} />
          </View>
          <View>
            <View style={CartStyle.details}>
              <Text style={CartStyle.titleElement}>{item?.title}</Text>
              <View style={CartStyle.variations}>
                <Text style={CartStyle.variationsText}>Variations:</Text>
                <View style={CartStyle.variations1}>
                  <Text style={CartStyle.variationsText2}>Black</Text>
                </View>
                <View style={CartStyle.variations1}>
                  <Text style={CartStyle.variationsText2}>Red</Text>
                </View>
              </View>
            </View>

            <View style={CartStyle.ratings}>
              <Text style={CartStyle.ratingsText}>{item?.stars}</Text>
              <StarRating rating={item.stars} onRate={() => {}} />
            </View>
          </View>
        </View>
        <View style={CartStyle.line2} />
        <View style={CartStyle.cardDown}>
          <Text style={CartStyle.totalOrder}>Total Order (1) :</Text>
          <Text style={CartStyle.totalPrice}>{item?.price}</Text>
        </View>
      </View>
    );
  };

  const sumPrices = (items) => {
    return items.reduce((total, item) => {
      const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
      return total + (isNaN(numericPrice) ? 0 : numericPrice);
    }, 0);
  };

  const [loading, setLoading] = useState(false);

  const handleProceed = () => {
    if (data?.length > 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("Checkout", {
          article: { price: "₹ " + sumPrices(data) },
        });
      }, 1000);
    } else {
      ToastAndroid.show("Cart is empty", ToastAndroid.SHORT);
    }
  };

  const emptyCart = async () => {
    try {
      await saveData("cartArticles", []);
      setData([]);
      ToastAndroid.show("Cart emptied successfully", ToastAndroid.SHORT);
    } catch (error) {
      console.error("Error emptying cart:", error);
      ToastAndroid.show("Failed to empty cart", ToastAndroid.SHORT);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const getCartArticles = async () => {
        try {
          const cartArticles = (await getData("cartArticles")) || [];
          setData(cartArticles);

          if (cartArticles.length === 0) {
            ToastAndroid.show("Your cart is empty", ToastAndroid.SHORT);
          }
        } catch (error) {
          console.error("Error checking empty cart:", error);
        }
      };

      getCartArticles();

      return () => {
        //
      };
    }, [])
  );

  return (
    <View style={CartStyle.view}>
      <View style={CartStyle.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          style={CartStyle.topBarLeft}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={CartStyle.topBarTitle}>Cart</Text>

        <TouchableOpacity
          onPress={() => emptyCart()}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          style={CartStyle.topBarRight}
        >
          <Text
            style={{
              color: colors.red,
              fontFamily: "Montserrat",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Empty Cart
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >
        {screenLoader ? (
          activityIndicator()
        ) : (
          <>
            <View style={CartStyle.address}>
              <Octicons name="location" size={22} color={colors.gray} />
              <Text style={CartStyle.text}>Delivery Address</Text>
            </View>

            <View style={{ paddingHorizontal: 10 }}>
              <View style={CartStyle.edit}>
                <Text style={CartStyle.editText}>Address:</Text>
                <TouchableOpacity
                  hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                  onPress={() => {}}
                >
                  <Feather name="edit" size={22} color={colors.black} />
                </TouchableOpacity>
              </View>
              <View style={CartStyle.addressContainer}>
                <Text style={CartStyle.addressText}>
                  216 St Paul's Rd, London N1 2LL, UK Contact : +44-784232
                </Text>
                <TouchableOpacity
                  hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                  onPress={() => {}}
                >
                  <Feather name="plus-circle" size={30} color={colors.black} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={CartStyle.shoppingBox}>
              <Text style={CartStyle.title}>Shopping List</Text>
              <ScrollView
                vertical
                showsVerticalScrollIndicator={true}
                overScrollMode="never"
                nestedScrollEnabled={true}
                style={{ height: 440 }}
              >
                {data?.length > 0 ? (
                  data.map((item) => {
                    return renderElement(item);
                  })
                ) : (
                  <Text
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    No items in cart
                  </Text>
                )}
              </ScrollView>

              <View style={CartStyle.line} />

              <View style={CartStyle.payment}>
                <View>
                  <Text style={CartStyle.orderAmountsValue}>
                    ₹ {sumPrices(data)}
                  </Text>
                  <Text
                    style={[
                      CartStyle.orderAmountsTitle2,
                      { color: colors.red },
                    ]}
                  >
                    Details
                  </Text>
                </View>
                <View style={CartStyle.paymentButton}>
                  <CustomButton
                    title="Proceed to Payment"
                    textColor={colors.white}
                    borderColor={colors.red}
                    buttonHeight={55}
                    buttonWidth={260}
                    titleSize={18}
                    color={colors.red}
                    handlePress={handleProceed}
                    loaderColor={colors.white}
                    loading={loading}
                  />
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};
export default Cart;
