import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import BuyNowStyle from "./BuyNow.style.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import colors from "../../../assets/colors/colors.js";
import CustomButton from "../../../components/CustomButton/CustomButton.js";

const BuyNow = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const article = route.params?.article;

  const sizesList = [
    {
      id: 1,
      value: 42,
    },
    {
      id: 2,
      value: 43,
    },
    {
      id: 3,
      value: 44,
    },
    {
      id: 4,
      value: 45,
    },
    {
      id: 5,
      value: 46,
    },
  ];

  const quantityList = [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 4,
    },
    {
      id: 5,
      value: 5,
    },
  ];

  const [selectedSize, setSelectedSize] = useState(sizesList[0].value);

  const [selectedQuantity, setSelectedQuantity] = useState(
    quantityList[0].value
  );

  const [loading, setLoading] = useState(false);

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Checkout", { article: article });
    }, 1000);
  };

  return (
    <View style={BuyNowStyle.view}>
      <View style={BuyNowStyle.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={BuyNowStyle.title}>Buy Now</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        vertical
      >
        <View style={BuyNowStyle.element}>
          <View style={BuyNowStyle.elementImage}>
            <Image source={article?.image} style={BuyNowStyle.image} />
          </View>
          <View style={BuyNowStyle.elementTxtsBlocs}>
            <View style={BuyNowStyle.elementIn}>
              <Text style={BuyNowStyle.title}>{article?.title}</Text>
              <Text style={BuyNowStyle.description}>
                {article?.description}
              </Text>
            </View>
            <View style={BuyNowStyle.pickersBox}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={BuyNowStyle.text}>Size</Text>
                <View style={BuyNowStyle.picker}>
                  <Picker
                    selectedValue={selectedSize}
                    onValueChange={(itemValue) => setSelectedSize(itemValue)}
                  >
                    {sizesList.map((country) => (
                      <Picker.Item
                        key={country.id}
                        label={country.value}
                        value={country.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={BuyNowStyle.text}>Qty</Text>
                <View style={[BuyNowStyle.picker, { width: 90 }]}>
                  <Picker
                    selectedValue={selectedQuantity}
                    onValueChange={(itemValue) =>
                      setSelectedQuantity(itemValue)
                    }
                  >
                    {quantityList.map((country) => (
                      <Picker.Item
                        key={country.id}
                        label={country.value}
                        value={country.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </View>
            <Text style={BuyNowStyle.delivery}>
              Delivery By{" "}
              <Text style={BuyNowStyle.deliveryDate}>10 May 2XXX</Text>
            </Text>
          </View>
        </View>

        <View style={BuyNowStyle.couponLine}>
          <View style={BuyNowStyle.coupon}>
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              size={30}
              color={colors.black}
            />
            <Text style={BuyNowStyle.couponText}>Apply Coupons</Text>
          </View>

          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            onPress={() => {}}
          >
            <Text style={BuyNowStyle.couponSelectText}>Select</Text>
          </TouchableOpacity>
        </View>

        <View style={BuyNowStyle.line} />

        <View style={BuyNowStyle.paymentDetails}>
          <Text style={BuyNowStyle.paymentDetailsTitle}>
            Order Payment Details
          </Text>
          <View style={BuyNowStyle.orderAmounts}>
            <Text style={BuyNowStyle.orderAmountsTitle}>Order Amounts</Text>
            <Text style={BuyNowStyle.orderAmountsValue}>{article?.price}</Text>
          </View>
          <View style={BuyNowStyle.orderAmounts}>
            <Text style={BuyNowStyle.orderAmountsTitle}>
              Convenience{" "}
              <Text style={{ color: colors.red, fontSize: 12 }}>
                {"   "}Know More
              </Text>
            </Text>
            <Text
              style={[BuyNowStyle.orderAmountsValue, { color: colors.red }]}
            >
              Apply Coupon
            </Text>
          </View>
          <View style={BuyNowStyle.orderAmounts}>
            <Text style={BuyNowStyle.orderAmountsTitle}>Delivery Fee</Text>
            <Text
              style={[BuyNowStyle.orderAmountsValue, { color: colors.red }]}
            >
              Free
            </Text>
          </View>
        </View>

        <View style={BuyNowStyle.line} />

        <View style={BuyNowStyle.paymentDetails}>
          <View style={BuyNowStyle.orderAmounts2}>
            <Text style={BuyNowStyle.orderAmountsTitle}>Order Total</Text>
            <Text style={BuyNowStyle.orderAmountsValue}>{article?.price}</Text>
          </View>
          <View style={BuyNowStyle.orderAmounts}>
            <Text style={BuyNowStyle.orderAmountsTitle}>
              EMI Available
              <Text style={{ color: colors.red }}>{"     "}Details</Text>
            </Text>
          </View>
        </View>

        <View style={BuyNowStyle.line} />

        <View style={BuyNowStyle.payment}>
          <View>
            <Text style={BuyNowStyle.orderAmountsValue}>{article?.price}</Text>
            <Text
              style={[BuyNowStyle.orderAmountsTitle2, { color: colors.red }]}
            >
              Details
            </Text>
          </View>
          <View style={BuyNowStyle.paymentButton}>
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
      </ScrollView>
    </View>
  );
};
export default BuyNow;
