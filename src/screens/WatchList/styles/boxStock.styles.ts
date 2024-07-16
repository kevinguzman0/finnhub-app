import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  containerStock: {
    backgroundColor: colors("blackNormal"),
    width: "45%",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 15,
    elevation: 5,
    shadowColor: colors("greenNormal"),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  containerPercentage: {
    alignSelf: "flex-start",
    marginTop: 10,
    padding: 5,
  },
  textPercentage: {
    color: colors("greenNormal"),
    fontSize: 20,
    fontWeight: "600",
  },
});
