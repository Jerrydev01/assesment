// list out color schemes for but light and dark mode themes.

interface ColorScheme {
  backgroundColor: string;
  textColor: string;
}

export const lightTheme: ColorScheme = {
  backgroundColor: "#FFFFFF",
  textColor: "#000",
};

export const darkTheme: ColorScheme = {
  backgroundColor: "#1F1F1F",
  textColor: "#B9B9B9",
};

