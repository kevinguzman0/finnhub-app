import React from "react";
import { LOGIN_SCREEN } from "../routesName";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { authRoutes } from "./auth.routes";

const Stack = createNativeStackNavigator();

class AuthStacks extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
        {authRoutes.map((stack) => (
          <Stack.Screen
            key={stack.name}
            name={stack.name}
            component={stack.component}
            options={stack.options}
          />
        ))}
      </Stack.Navigator>
    );
  }
}

export default AuthStacks;
