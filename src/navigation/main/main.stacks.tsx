import React from "react";
import { ALERT_SCREEN } from "../routesName";
import { CustomTab } from "../../components/navigation/CustomTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { mainRoutes } from "./main.routes";

const Tab = createBottomTabNavigator();

class MainStacks extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName={ALERT_SCREEN}
        tabBar={(props) => <CustomTab {...props} />}
      >
        {mainRoutes.map((stack) => (
          <Tab.Screen
            key={stack.name}
            name={stack.name}
            component={stack.component}
            options={stack.options}
          />
        ))}
      </Tab.Navigator>
    );
  }
}

export default MainStacks;
