import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

import { useSelector } from "react-redux";
import { globalStyles } from "../../constant/globalStyles";
import { darkTheme, lightTheme } from "../../constant/themeStyle";
import { menuTabs } from "../../dummData/menuTapData";
const Tab = createBottomTabNavigator();

const BottomNavBar = ({ navigation }) => {
  const [active, setActive] = useState("Home");
  const cartItems = useSelector((state) => state.cart);
  const colorScheme = useColorScheme();
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const themeTextStyle =
    colorScheme === "light" ? lightTheme.textColor : darkTheme.textColor;
  const themeBackgroundStyle =
    colorScheme === "light"
      ? lightTheme.backgroundColor
      : darkTheme.backgroundColor;
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarActiveTintColor: "#e91e63",
      // }}
      tabBar={(props) => (
        <SafeAreaView
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: themeBackgroundStyle,
              paddingHorizontal: globalStyles.paddingInline,
            },
            styles.shadow,
          ]}
          className="pb-[20px]  pt-4 border-t-1 relative z-10 border-gray-300"
        >
          {props.state.routes.map((route, index) => {
            const { options } = props.descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const menuTab = menuTabs.find(
              (tab) => tab.name === label && tab.Link === route.name
            );

            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(`${route.name}`);
                  setActive(label);
                  if (label === "Home") {
                    navigation.navigate("HomeIndex");
                  }
                }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={`w-full ${
                  menuTab.hidden === true ? "hidden" : "block"
                }`}
                key={route.key}
              >
                {menuTab && (
                  <View
                    key={label}
                    className={`justify-center items-center  ${
                      menuTab.hidden === true ? "hidden" : "flex"
                    }`}
                  >
                    <MaterialCommunityIcons
                      name={
                        active === label ? menuTab.ActiveIcon : menuTab.icon
                      }
                      color={
                        active === label ? globalStyles.primaryColor : "black"
                      }
                      size={24}
                    />
                    <View className="flex justify-center items-center">
                      <Text
                        style={{
                          fontFamily: globalStyles.poppinsMedium,
                          color:
                            active === label
                              ? globalStyles.primaryColor
                              : "black",
                        }}
                        className="text-center"
                      >
                        {label}
                      </Text>
                    </View>
                    {label === "cart" ? (
                      <View className="absolute -top-3 -right-2 z-50 p-[2px]">
                        <Text
                          style={{
                            fontFamily: globalStyles.poppinsBold,
                            color: globalStyles.primaryColor,
                          }}
                          className="text-white text-[14px] text-center"
                        >
                          {totalCartQuantity === 0 ? "" : totalCartQuantity}{" "}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>
      )}
    >
      {menuTabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.Link}
          component={tab.component} // Replace with the appropriate component for each tab
          options={{
            headerShown: false, // Hide the header for the tab screen
            tabBarLabel: tab.name,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name={tab.icon}
                color={color}
                size={size}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavBar;
const styles = StyleSheet.create({
  shadow: {
    elevation: 6, // Android elevation (similar to box-shadow)
    shadowColor: "#18223a", // iOS shadow color
    shadowOffset: { width: 4, height: 8 }, // iOS shadow offset
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowRadius: 24, // iOS shadow radius
  },
});
