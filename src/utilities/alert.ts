import Toast from "react-native-toast-message";

export const showAlert = (error: boolean, text: string) => {
  Toast.show({
    type: error ? "error" : "success",
    text1: "Hello",
    text2: text,
  });
};
