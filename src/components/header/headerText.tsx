import { Text, View } from "react-native";
import { styles } from "./header.styles";

type HeaderWelcomeProps = {
  onPress: () => void;
  text: string;
  textAction: string;
};

export const HeaderWelcome = ({
  onPress,
  text,
  textAction,
}: HeaderWelcomeProps) => {
  return (
    <>
      <View>
        <Text style={styles.title}>Welcome to FinnHub.io</Text>
      </View>
      <View style={styles.marginTop}>
        <Text style={{ fontSize: 16 }}>
          {text}{" "}
          <Text style={styles.textGreen} onPress={onPress}>
            {textAction}
          </Text>
        </Text>
      </View>
    </>
  );
};
