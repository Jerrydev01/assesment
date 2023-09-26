import { Entypo, Feather } from "@expo/vector-icons";
import React from "react";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../component/common/ButtonComponent";
import HeaderComponent from "../component/common/Header";
import { formatCurrency } from "../constant/currencyFormatter";
import { globalStyles } from "../constant/globalStyles";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../reduxt-toolkit/slices/cartSlice";

type Props = {
  navigation: any;
};

const Cart = ({ navigation }: Props) => {
  const cartItems = useSelector((state: any) => state.cart);
  console.log("🚀 ~ file: Menu.tsx:31 ~ Menu ~ cartItems:", cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce((total: any, item: any) => {
    const itemPrice = item.price; // Use promoPrice if available, otherwise use the regular price
    return total + itemPrice * item.quantity;
  }, 0);
  // Calculate the total cart quantity
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleRemoveCartitems = (id: any) => {
    dispatch(removeFromCart(id));
  };

  const handleDecreaseQuantity = (id: any) => {
    dispatch(decreaseQuantity(id));
  };
  const handleIncreaseQuantity = (id: any) => {
    dispatch(addToCart(id));
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="border-b border-gray-300">
        <HeaderComponent
          icon={"chevron-left"}
          title="Cart"
          navigation={navigation}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          paddingTop: 20,
        }}
      >
        <View
          className=" flex gap-y-5"
          style={{ paddingHorizontal: globalStyles.paddingInline }}
        >
          {cartItems.map((cartItem) => {
            return (
              <View
                key={cartItem.id}
                className="flex-row justify-between items-center"
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("IndividualProduct", {
                      id: cartItem.id,
                    });
                  }}
                  className="flex-row flex-auto gap-x-2 "
                >
                  <View className="rounded-[8px] bg-white  p-1 ">
                    <Image
                      source={cartItem.image}
                      resizeMode="contain"
                      className="w-[90px] h-[90px] "
                    />
                  </View>
                  <View className="flex justify-between flex-auto">
                    <Text
                      className="text-[15px]"
                      style={{ fontFamily: globalStyles.poppinsBold }}
                    >
                      {cartItem.name.length > 10
                        ? cartItem.name.substring(0, 10) + "..."
                        : cartItem.name}
                    </Text>
                    <Text
                      className="text-[15px]"
                      style={{
                        fontFamily: globalStyles.poppinsMedium,
                        color: globalStyles.primaryColor,
                      }}
                    >
                      {formatCurrency(cartItem.price, "GBP")}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleRemoveCartitems(cartItem.id)}
                    >
                      <Feather name="trash-2" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
                <View
                  style={{ paddingHorizontal: globalStyles.paddingInline }}
                  className="flex justify-between gap-y-1 items-center"
                >
                  <Pressable
                    onPress={() => handleDecreaseQuantity(cartItem.id)}
                    className="bg-white p-[6px] rounded-[8px]"
                  >
                    <Entypo
                      name="minus"
                      size={20}
                      color={cartItem.quantity === 0 ? "gray" : "black"}
                    />
                  </Pressable>
                  <Text
                    style={{
                      fontFamily: globalStyles.poppinsMedium,
                    }}
                    className="text-[15px]"
                  >
                    {cartItem.quantity}
                  </Text>
                  <Pressable
                    onPress={() => handleIncreaseQuantity(cartItem)}
                    className="bg-white p-[6px] rounded-[8px]"
                  >
                    <Entypo name="plus" size={20} color="black" />
                  </Pressable>
                </View>
              </View>
            );
          })}
          <View className="pt-5 flex-row justify-between">
            <Text style={{ fontFamily: globalStyles.poppinsBold }}>
              Total{" "}
              <Text className="text-gray-700 text-[15px]">
                {" "}
                ({totalCartQuantity} items )
              </Text>
            </Text>
            <Text
              className="text-[15px]"
              style={{
                fontFamily: globalStyles.poppinsBold,
                color: globalStyles.primaryColor,
              }}
            >
              {formatCurrency(total, "GBP")}
            </Text>
          </View>
          <ButtonComponent
            bgColor={"#DB3C25"}
            borderColor="#DB3C25"
            disable={false}
            color="white"
            title={`Checkout - ${formatCurrency(total, "GBP")}`}
            borderWidth={0}
            buttonAction={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
