import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { wp } from "../../../utilities/responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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
  containerLoginButton: {
    width: wp(90),
  },
});
