import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/button";
import { colors } from "../../theme/colors";

export const backgroundColors = {
  red: colors("redNormal"),
  green: colors("greenNormal"),
};

type ButtonProps = {
  title: string;
  backgroundColor?: keyof typeof backgroundColors;
  onPress: () => void;
  style?: any;
  textStyle?: any;
};

export const ButtonCustom: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  backgroundColor = "green",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        style,
        {
          backgroundColor,
        },
      ]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
