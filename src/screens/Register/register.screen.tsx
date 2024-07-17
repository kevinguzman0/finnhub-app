import React, { useState } from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useHandleRegister } from "../../hooks/useHandleRegister";
import { showAlert } from "../../utilities/alert";
import { Header } from "../../components/header/header";
import { LOGIN_SCREEN } from "../../navigation/routesName";
import { InputCustom } from "../../components/input/input";
import { ButtonCustom } from "../../components/button/button";
import { styles } from "./styles/register.styles";
import { HeaderWelcome } from "../../components/header/headerText";

export type RegisterScreenProps = NativeStackScreenProps<any>;

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const { handleSignUp } = useHandleRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  const register = () => {
    if (!email || !password) {
      showAlert(true, "Please fill in all fields");
      return;
    }
    handleSignUp(email, password);
  };

  return (
    <View style={styles.container}>
      <Header />
      <HeaderWelcome
        onPress={goToLogin}
        text="Already have an account?"
        textAction="Sign in."
      />
      <View style={styles.marginTop}>
        <InputCustom placeholder="Name" value={name} onChangeText={setName} />
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
        <ButtonCustom title="Sign Up" onPress={register} />
      </View>
    </View>
  );
};

export default RegisterScreen;
