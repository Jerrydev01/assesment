import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../constant/globalStyles";

type Props = {
  title: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  borderWidth: number;
  buttonAction?: () => void;
  disable: boolean;
};

const ButtonComponent = ({
  title,
  bgColor,
  borderColor,
  color,
  buttonAction,
  borderWidth,
  disable,
}: Props) => {
  return (
    <TouchableOpacity disabled={disable} onPress={buttonAction} className="pt-[20px]">
      <Text
        style={{
          backgroundColor: bgColor,
          fontFamily: globalStyles.poppinsMedium,
          borderColor: borderColor,
          borderWidth: borderWidth,
          color: color,
        }}
        className="text-center py-[12px] rounded-full"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
