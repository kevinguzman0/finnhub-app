import { TextInput } from "react-native";
import { styles } from "./styles/input.styles";
import { colors } from "../../theme/colors";

type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  secureTextEntry?: boolean;
  style?: any;
  maxLength?: number;
};

export const InputCustom: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  style,
  maxLength,
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors("greyDarker")}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
    />
  );
};
