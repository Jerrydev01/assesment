import Toast from "react-native-root-toast";
import { globalStyles } from "./globalStyles";

export const showToast = (text: string, color: string, textColor: string) => {
  // Display the Toast on screen.
  let toast = Toast.show(text, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    onPress: () => {
      Toast.hide(toast);
    },
    textStyle: {
      fontFamily: globalStyles.poppinsMedium,
      color: textColor,
      paddingHorizontal: 20,
    },
    containerStyle: {
      backgroundColor: color,
      paddingHorizontal: 20,
      marginTop: 16,
      borderRadius: 16,
      position: "relative",
      zIndex: 9999
    },
  });

  // Manually hide the Toast after a delay.
  setTimeout(function hideToast() {
    Toast.hide(toast);
  }, 5000);
};
