import { Image, View } from "react-native";
import React from "react";
import { styles } from "./header.styles";

export class Header extends React.Component {
  render() {
    const pathLogo = require("../../../assets/logo-finnhub.png");

    return (
      <View style={styles.container}>
        <Image source={pathLogo} style={styles.image} />
      </View>
    );
  }
}
