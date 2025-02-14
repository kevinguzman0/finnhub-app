import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { hp } from "../../utilities/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors("blackNormal"),
    height: hp(30),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
  },
  title: {
    color: colors("greenNormal"),
    fontSize: 30,
    fontWeight: "500",
  },
  marginTop: {
    marginTop: 10,
  },
  textGreen: {
    color: colors("greenNormal"),
    fontWeight: "bold",
  },
});
