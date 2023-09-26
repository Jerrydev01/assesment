import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../component/common/ButtonComponent";
import HeaderComponent from "../component/common/Header";
import { formatCurrency } from "../constant/currencyFormatter";
import { globalStyles } from "../constant/globalStyles";
import { productData } from "../dummData/productData";
import useThemeStyles from "../hooks/theme";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../reduxt-toolkit/slices/cartSlice";

type Props = {
  navigation: any;
  route: any;
};

const IndividualProduct = ({ navigation, route }: Props) => {
  const { id } = route.params;
  const { themeBackgroundStyle, themeTextStyle } = useThemeStyles();
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreId, setSeeMoreId] = useState({});
  const [seeMoreIndex, setSeeMoreIndex] = useState(false);
  const [activePage, setActivePage] = useState(0); // State to track the active page
  const cartItems = useSelector((state: any) => state.cart);
  const pagerRef = useRef(null);
  // Find the product based on the ID
  const eachProduct = productData.find((item) => item.id === id);
  const eachCartItems = cartItems.filter((item) => item.id === id);
  const productQuantity =
    eachCartItems.length > 0 ? eachCartItems[0].quantity : 0;
  const dispatch = useDispatch();

  const handleRemoveCartitems = (id: any) => {
    dispatch(removeFromCart(id));
  };

  const handleDecreaseQuantity = (id: any) => {
    dispatch(decreaseQuantity(id));
  };
  const handleIncreaseQuantity = (id: any) => {
    dispatch(addToCart(id));
  };
  const productInfo = [
    {
      id: 1,
      title: "Ingredients",
      description: eachProduct.ingredient,
    },
    {
      id: 2,
      title: "Nutritional Information",
      description: eachProduct.nutritionalInformation,
      howToPrepare: eachProduct.howToPrepare,
    },
    {
      id: 3,
      title: "How to Prepare",
      description: eachProduct.howToPrepare,
    },
    {
      id: 4,
      title: "Dietary Information",
      description: eachProduct.dietaryInformation,
    },
    {
      id: 5,
      title: "Storage Information",
      description: eachProduct.storageInformation,
    },
    {
      id: 6,
      title: "Extra",
      description: eachProduct.extra,
    },
  ];

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  const handleSeeMoreId = (id: any) => {
    setSeeMoreId((prev: any) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };

  const onPageChange = (event: { nativeEvent: { position: number } }) => {
    const selectedPageIndex = event.nativeEvent.position;
    setActivePage(selectedPageIndex);
  };

  if (!eachProduct) {
    // Handle case where the product with the given ID is not found
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <HeaderComponent icon={"chevron-left"} title="" navigation={navigation} />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-1 ">
          <View className="flex-1 min-h-[330px]">
            <PagerView
              style={styles.pagerView}
              initialPage={0}
              onPageSelected={onPageChange}
            >
              {eachProduct.imagesSlide.map((item: any, index: any) => (
                <View
                  style={{
                    marginHorizontal: globalStyles.paddingInline,
                  }}
                  className="bg-white rounded-[8px] h-[300px]"
                  key={index}
                >
                  <Image
                    source={item}
                    resizeMode="contain"
                    style={styles.image}
                  />
                </View>
              ))}
            </PagerView>
            <View className="flex-row justify-center items-center mt-[20px]">
              {eachProduct.imagesSlide.map((item: any, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      pagerRef.current?.setPage(index); // Go to the selected page
                    }}
                  >
                    <View
                      style={[
                        styles.dot,
                        {
                          backgroundColor:
                            index === activePage ? "#DB3C25" : "lightgray",
                        },
                      ]}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: globalStyles.paddingInline,
            }}
          >
            <View className="flex-row justify-between items-center mt-[20px]">
              <Text
                className="text-[16px] "
                style={{ fontFamily: globalStyles.poppinsBold }}
              >
                {eachProduct.name}
              </Text>
              <Text
                className="text-[16px] "
                style={{
                  fontFamily: globalStyles.poppinsBold,
                  color: globalStyles.primaryColor,
                }}
              >
                {formatCurrency(eachProduct.price, "GBP")}
              </Text>
            </View>
            <Text
              onPress={() => {
                handleSeeMore();
              }}
              style={{ fontFamily: globalStyles.poppinsMedium }}
              className=""
            >
              {seeMore ? (
                <Text
                  style={{
                    fontFamily: globalStyles.poppinsMedium,
                  }}
                >
                  {eachProduct.description + "..."}{" "}
                  <Text
                    style={{
                      fontFamily: globalStyles.poppinsBold,
                    }}
                    className="text-[14px] text-[#DB3C25]"
                  >
                    See Less
                  </Text>
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: globalStyles.poppinsMedium,
                  }}
                >
                  {eachProduct.description.slice(0, 200) + "..."}{" "}
                  <Text
                    style={{
                      fontFamily: globalStyles.poppinsBold,
                    }}
                    className="text-[14px] text-[#DB3C25]"
                  >
                    See More
                  </Text>
                </Text>
              )}
            </Text>
            <View className="mt-[40px] flex">
              {productInfo.map((item, index) => {
                // add border bottom to the last index
                const lastIndex = productInfo.length - 1;
                console.log(
                  "🚀 ~ file: IndivitualProduct.tsx:236 ~ {productInfo.map ~ lastIndex:",
                  lastIndex
                );
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleSeeMoreId(item.id);
                    }}
                    key={item.id}
                    style={{ marginBottom: index === lastIndex ? 1 : 0 }}
                    className={`py-3  border-t border-gray-300 ${
                      index === lastIndex ? "border-b" : ""
                    }`}
                  >
                    <View className="flex-row " key={item.id}>
                      <View className="flex-row justify-between items-center w-full  ">
                        <Text
                          style={{
                            fontFamily: globalStyles.poppinsMedium,
                          }}
                          className="text-[14px] "
                        >
                          {item.title}
                        </Text>
                        <Ionicons
                          name={
                            seeMoreId[item.id] ? "chevron-up" : "chevron-down"
                          }
                          size={24}
                          color={themeTextStyle}
                        />
                      </View>
                    </View>
                    {seeMoreId[item.id] ? (
                      <Text
                        style={{
                          fontFamily: globalStyles.poppinsMedium,
                        }}
                        className="text-[14px] text-gray-700 mt-1"
                      >
                        {item.description}
                      </Text>
                    ) : null}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View
            style={{ paddingHorizontal: globalStyles.paddingInline }}
            className="flex-row justify-between mt-[30px] items-center"
          >
            <Pressable
              onPress={() => handleDecreaseQuantity(eachProduct.id)}
              className="bg-white p-2 rounded-[8px]"
            >
              <Entypo
                name="minus"
                size={24}
                color={productQuantity === 0 ? "gray" : "black"}
              />
            </Pressable>
            <Text
              style={{
                fontFamily: globalStyles.poppinsMedium,
              }}
              className="text-[16px]"
            >
              {productQuantity}
            </Text>
            <Pressable
              onPress={() => handleIncreaseQuantity(eachProduct)}
              className="bg-white p-2 rounded-[8px]"
            >
              <Entypo name="plus" size={24} color="black" />
            </Pressable>
          </View>

          <View style={{ paddingHorizontal: globalStyles.paddingInline }}>
            <ButtonComponent
              bgColor={productQuantity === 0 ? "#db3d25b8" : "#DB3C25"}
              borderColor="#DB3C25"
              disable={productQuantity === 0 ? true : false}
              color="white"
              title="Add to cart"
              borderWidth={0}
              buttonAction={() => {
                if (productQuantity > 0) {
                  navigation.navigate("CartIndex");
                }
              }}
            />
            <ButtonComponent
              bgColor="transparent"
              borderColor="#DB3C25"
              disable={false}
              color="#DB3C25"
              borderWidth={1}
              title="Subscribe to a Plan"
              buttonAction={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
    flexGrow: 1,
  },

  image: {
    width: "100%",
    height: 300,
  },
  descriptionText: {
    padding: 16,
    textAlign: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default IndividualProduct;
