import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/button";

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
};

export const ButtonCustom: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
