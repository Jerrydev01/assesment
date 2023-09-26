import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../constant/themeStyle";

const useThemeStyles = () => {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? lightTheme.textColor : darkTheme.textColor;
  const themeBackgroundStyle =
    colorScheme === "light"
      ? lightTheme.backgroundColor
      : darkTheme.backgroundColor;

  return { themeTextStyle, themeBackgroundStyle };
};

export default useThemeStyles;
