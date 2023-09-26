import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../constant/globalStyles";

type Props = {
  navigation: any;
  title: string;
  icon: any;
};
const HeaderComponent = ({ navigation, title, icon }: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: globalStyles.paddingInline,
      }}
      className="flex-row pt-[20px] pb-[15px] justify-between items-center"
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-white p-1 rounded-[8px]"
      >
        <Feather name={icon} size={24} color="black" />
      </TouchableOpacity>
      <Text
        className="text-[16px]"
        style={{ fontFamily: globalStyles.poppinsBold }}
      >
        {title}
      </Text>
      <View className="w-[24px]" />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
