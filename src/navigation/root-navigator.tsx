import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStacks from "./main/main.stacks";

class RootNavigator extends React.Component {
  render() {
    // const token = useAppSelector(selectToken);

    return (
      <NavigationContainer>
        {/* {token ? <MainStacks /> : <AuthStacks />} */}
        <MainStacks />
      </NavigationContainer>
    );
  }
}

export default RootNavigator;
