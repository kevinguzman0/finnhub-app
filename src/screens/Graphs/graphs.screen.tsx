import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import { hp } from "../../utilities/responsive";
import { Chart } from "./components/chart";
import { data } from "../../ constants/charts";

const GraphsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Chart data={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contentFlatList}
        />
      </View>
    </View>
  );
};

export default GraphsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors("whiteNormal"),
  },
  containerList: {
    marginTop: hp(5),
    alignItems: "center",
    width: "100%",
  },
  contentFlatList: {
    alignItems: "center",
  },
});
