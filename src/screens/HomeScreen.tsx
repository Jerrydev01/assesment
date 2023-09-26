import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../constant/globalStyles";

const HomeScreen = ({navigation}:any) => {
  return (
    <SafeAreaView className="flex-1">
      <Pressable onPress={() => navigation.navigate("MenuIndex") }  className="m-auto">
        <Text
          className="text-2xl"
          style={{ fontFamily: globalStyles.poppinsBold }}
        >
          Go to menu <Text className="text-[#DB3C25]">screen</Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
