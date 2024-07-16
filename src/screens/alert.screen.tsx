import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

class AlertScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors("whiteNormal"),
  },
});
