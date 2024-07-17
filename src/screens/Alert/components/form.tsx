import { Text, View } from "react-native";
import { styles } from "../styles/alert.screen.styles";
import { DropDownCustom } from "../../../components/input/DropDown";
import { InputCustom } from "../../../components/input/input";
import { ButtonCustom } from "../../../components/button/button";
import { useState } from "react";
import { showAlert } from "../../../utilities/alert";
import { useAppDispatch } from "../../../store/hooks";
import { setAlertStock } from "../../../store/slices/stock.slice";
import { DataDropDownStock } from "../../../types/stock.type";

export const FormAddAlert = ({ data }: { data: DataDropDownStock[] }) => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  const saveInformation = () => {
    if (!inputValue || !dropdownValue) {
      showAlert(true, "Please fill all the fields");
      return;
    }

    const newAlert = {
      symbol: dropdownValue,
      price: inputValue,
    };

    dispatch(setAlertStock(newAlert));
    showAlert(false, "Alert saved successfully");

    setInputValue("");
    setDropdownValue("");
  };

  return (
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
  );
};
