import React from "react";
import { View } from "react-native";
import { ButtonCustom } from "../../components/button/button";
import { useGetStockQuery } from "../../store/apis/stock.api";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/slices/user.slice";
import { styles } from "./styles/alert.screen.styles";
import { FormAddAlert } from "./components/form";
import { Header } from "../../components/header/header";

const AlertScreen = () => {
  const { data } = useGetStockQuery("");
  const dispatch = useAppDispatch();

  const logOutUser = () => dispatch(logout());

  return (
    <View style={styles.container}>
      <Header />
      <FormAddAlert data={data || []} />

      <View style={styles.containerButtonLogout}>
        <ButtonCustom
          backgroundColor="red"
          title="LogOut"
          onPress={logOutUser}
        />
      </View>
    </View>
  );
};
export default AlertScreen;
