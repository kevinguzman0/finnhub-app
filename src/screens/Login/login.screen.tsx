import React, { useState } from "react";
import { View } from "react-native";
import { useHandleLogin } from "../../hooks/useHandleLogin";
import { REGISTER_SCREEN } from "../../navigation/routesName";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { InputCustom } from "../../components/input/input";
import { Header } from "../../components/header/header";
import { showAlert } from "../../utilities/alert";
import { ButtonCustom } from "../../components/button/button";
import { styles } from "./styles/login.styles";
import { HeaderWelcome } from "../../components/header/headerText";

export type LoginScreenProps = NativeStackScreenProps<any>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { handleLogin } = useHandleLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!email || !password) {
      showAlert(true, "Please fill in all fields");
      return;
    }
    handleLogin(email, password);
  };

  const goToRegister = () => {
    navigation.navigate(REGISTER_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Header />
      <HeaderWelcome
        onPress={goToRegister}
        text="Don't have an account?"
        textAction="Sign up."
      />
      <View style={styles.marginTop}>
        <InputCustom
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <InputCustom
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.containerLoginButton}>
        <ButtonCustom title="Sign in" onPress={login} />
      </View>
    </View>
  );
};

export default LoginScreen;
