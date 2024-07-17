import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStacks from "./main/main.stacks";
import AuthStacks from "./auth/auth.stacks";

import { useAppSelector } from "../store/hooks";
import { selectUser } from "../store/slices/user.slice";

const RootNavigator = () => {
  const { token } = useAppSelector(selectUser);

  return (
    <NavigationContainer>
      {token ? <MainStacks /> : <AuthStacks />}
    </NavigationContainer>
  );
};

export default RootNavigator;
