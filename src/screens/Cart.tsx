import { Entypo, Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";

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
import { showToast } from "../constant/ShowToast";
import { formatCurrency } from "../constant/currencyFormatter";
import { globalStyles } from "../constant/globalStyles";
import {
  loadCartItemsFromAsyncStorage,
  saveCartItemsToAsyncStorage,
} from "../reduxt-toolkit/slices/cartApiSlice";
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
  const updatedCart = useSelector((state: any) => state.cart);

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

  // Load cart items from AsyncStorage when the component mounts
  useEffect(() => {
    dispatch(loadCartItemsFromAsyncStorage() as any);
  }, [dispatch]);

  // Add an item to the cart and save it to AsyncStorage
  const handleIncreaseQuantity = (item: any) => {
    dispatch(addToCart(item));
    const updatedCart = [...cartItems, item];
    dispatch(saveCartItemsToAsyncStorage(updatedCart) as any);
  };

  // Remove an item from the cart and update AsyncStorage
  const handleRemoveCartitems = (itemId: any) => {
    dispatch(removeFromCart(itemId));
    const updatedCart = cartItems.filter((item: any) => item.id !== itemId);
    dispatch(saveCartItemsToAsyncStorage(updatedCart) as any);
  };

  // Decrease quantity of an item in the cart and update AsyncStorage
  const handleDecreaseQuantity = (itemId: any) => {
    // Decrease the quantity in the Redux store
    dispatch(decreaseQuantity(itemId));
    // Get the updated cart from the Redux store
    // Save the updated cart to AsyncStorage
    dispatch(saveCartItemsToAsyncStorage(updatedCart) as any);
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
      {cartItems.length > 0 ? (
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
                      onPress={() => {
                        handleDecreaseQuantity(cartItem.id);
                        showToast("Item removed to cart", "white", "red");
                      }}
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
                      onPress={() => {
                        handleIncreaseQuantity(cartItem);
                        showToast("Item added to cart", "white", "black");
                      }}
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
      ) : (
        <View className=" flex-1 justify-center">
          <Text
            className="text-center"
            style={{
              fontFamily: globalStyles.poppinsBold,
              fontSize: 18,
            }}
          >
            No items in cart
          </Text>
          <TouchableOpacity className="pt-5 px-8">
            <ButtonComponent
              bgColor={"#DB3C25"}
              borderColor="#DB3C25"
              disable={false}
              color="white"
              title="Continue Shopping"
              borderWidth={0}
              buttonAction={() => {
                navigation.navigate("MenuIndex");
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
