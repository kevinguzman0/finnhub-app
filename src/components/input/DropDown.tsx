import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./styles/dropdown.styles";

interface DropDownProps {
  data: DataProps[];
  value: string;
  onChange: (item: any) => void;
}

type DataProps = {
  label: string;
  value: string;
};

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
