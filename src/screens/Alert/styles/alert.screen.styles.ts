import { StyleSheet } from "react-native";
import { wp } from "../../../utilities/responsive";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  containerTitle: {
    paddingHorizontal: 20,
    marginTop: 20,
    width: wp(100),
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors("greenNormal"),
    marginBottom: 20,
    textAlign: "left",
    alignItems: "flex-start",
  },
  containerForm: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  containerButtonLogout: {
    position: "absolute",
    bottom: 0,
    width: wp(90),
    justifyContent: "center",
    alignItems: "center",
  },
});
