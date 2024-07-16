import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { hp, wp } from "../../../utilities/responsive";

export const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    backgroundColor: colors("whiteNormal"),
    height: hp(8),
    width: wp(55),
    alignSelf: "center",
    elevation: 5,
    shadowColor: colors("blackNormal"),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tabBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});
