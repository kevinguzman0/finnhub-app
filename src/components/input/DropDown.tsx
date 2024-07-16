import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./styles/dropdown.styles";

interface DropDownProps {
  data: Array<{ label: string; value: string }>;
  value: string;
  onChange: (item: any) => void;
}

export const DropDownCustom: React.FC<DropDownProps> = ({
  data,
  value,
  onChange,
}) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.textStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={data}
      search
      maxHeight={300}
      itemTextStyle={styles.textStyle}
      labelField="label"
      valueField="value"
      placeholder={"Select a stock to watch"}
      searchPlaceholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};
