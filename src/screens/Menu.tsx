import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../constant/currencyFormatter";
import { globalStyles } from "../constant/globalStyles";
import { ProductProps, productData } from "../dummData/productData";
import useThemeStyles from "../hooks/theme";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../reduxt-toolkit/slices/cartSlice";
import { showToast } from "../constant/ShowToast";

type Props = {
  navigation: any;
};
const Menu = ({ navigation }: Props) => {
  const { themeBackgroundStyle, themeTextStyle } = useThemeStyles();
  const cartItems = useSelector((state: any) => state.cart);
  const [seeMoreId, setSeeMoreId] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  // Calculate the width for each column

  const dispatch = useDispatch();
  const windowWidth = useWindowDimensions().width; // Get the screen width

  // Calculate the number of columns dynamically
  const numColumns = windowWidth >= 600 ? 3 : 2; // You can adjust the breakpoint as needed

  // Filtering function
  const filteredProducts = productData.filter((item: ProductProps) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
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

  const handleSeeMoreId = (id: any) => {
    setSeeMoreId((prev: any) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="border-b border-gray-300">
        <View
          style={{
            paddingHorizontal: globalStyles.paddingInline,
          }}
        >
          <Text className="pt-[25px] pb-[10px]  text-center">Menu</Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: globalStyles.paddingInline,
        }}
        className="mt-[12px] relative"
      >
        <View className="absolute z-10 bottom-[11px] left-14">
          <AntDesign name="search1" size={18} color="black" />
        </View>
        <TextInput
          placeholder="Search"
          style={{
            fontFamily: globalStyles.poppinsMedium,
          }}
          className="py-[6px] text-[15px] pl-[70px] pr-[10px] border border-gray-300 rounded-[8px] bg-white"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="done"
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }: { item: ProductProps }) => {
          return (
            <Pressable
              style={{
                backgroundColor: themeBackgroundStyle,
              }}
              onPress={() => {
                navigation.navigate("IndividualProduct", {
                  id: item.id,
                });
              }}
              className="w-1/2 flex-auto mb-[16px] pt-[15px] pb-[11px] rounded-[8px]"
            >
              <TouchableOpacity
                onPress={() => {
                  handleSeeMoreId(item.id);
                }}
                style={{ paddingHorizontal: globalStyles.paddingInline }}
                className="flex-row justify-end items-center pb-1-2"
              >
                <AntDesign
                  name={seeMoreId[item.id] ? "heart" : "hearto"}
                  size={22}
                  color={seeMoreId[item.id] ? "#DB3C25" : "black"}
                />
              </TouchableOpacity>
              {/* Add other content for your list item here */}
              <Image
                className="py-[8px] border"
                alt={item.name}
                source={item.image}
                resizeMode="contain"
                style={{ width: "100%", height: 95 }}
              />
              <View className="flex-row justify-between px-[8px] w-full mt-2">
                <View>
                  <Text
                    style={{
                      fontFamily: globalStyles.poppinsBold,
                    }}
                    className="text-[15px] "
                  >
                    {item.name.length > 8
                      ? item.name.slice(0, 8) + "..."
                      : item.name}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: globalStyles.poppinsMedium,
                      color: globalStyles.primaryColor,
                    }}
                    className="text-[14px] "
                  >
                    {formatCurrency(item.price, "GBP")}
                  </Text>
                </View>
              </View>
              <View className="px-[8px] mt-[14px]">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("IndividualProduct", {
                      id: item.id,
                    });
                  }}
                  className="py-2 px-3 rounded-full flex-row items-center "
                  style={{
                    backgroundColor: globalStyles.primaryColor,
                    borderRadius: 8,
                  }}
                >
                  <View className="pr-2">
                    <MaterialCommunityIcons
                      name={"shopping-outline"}
                      size={24}
                      color="white"
                    />
                  </View>
                  <Text
                    className="text-[14px]"
                    style={{
                      color: "white",
                      fontFamily: globalStyles.poppinsMedium,
                    }}
                    onPress={() => {
                      handleIncreaseQuantity(item);
                      showToast('Item added to cart', 'white', 'black');
                      // navigation
                    }}
                  >
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
          marginTop: 16,
        }}
        numColumns={numColumns} // Use the dynamic number of columns
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 16,
          paddingHorizontal: globalStyles.paddingInline,
        }}
      />
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});
