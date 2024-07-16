import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { Header } from "./components/header";
import { DropDownCustom } from "../../components/input/DropDown";
import { ButtonCustom } from "../../components/button/button";
import { InputCustom } from "../../components/input/input";
import { useGetStockQuery } from "../../store/apis/stock.api";
import { useAppDispatch } from "../../store/hooks";
import { setAlertStock } from "../../store/slices/stock.slice";
import { showAlert } from "../../utilities/alert";

const AlertScreen = () => {
  const { data } = useGetStockQuery("");
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  const saveInformation = () => {
    if (!inputValue || !dropdownValue) {
      showAlert(true, "Please fill all the fields");
      return;
    }
    setInputValue("");
    setDropdownValue("");

    const newAlert = {
      symbol: dropdownValue,
      price: inputValue,
    };

    dispatch(setAlertStock(newAlert));
    showAlert(false, "Alert saved successfully");
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.containerTitle}>
        <Text style={styles.title}>Add a new alert for a stock</Text>

        <View style={styles.containerForm}>
          <DropDownCustom
            data={data || []}
            value={dropdownValue}
            onChange={(item) => setDropdownValue(item.value)}
          />

          <InputCustom
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            placeholder="Price alert"
            keyboardType="numeric"
          />

          <ButtonCustom title="Save" onPress={saveInformation} />
        </View>
      </View>
    </View>
  );
};
export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerTitle: {
    paddingHorizontal: 20,
    marginTop: 20,
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
});
