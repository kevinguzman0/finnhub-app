import AlertScreen from "../../screens/Alert/alert.screen";
import WatchListScreen from "../../screens/WatchList/watchlist.screen";
import GraphsScreen from "../../screens/Graphs/graphs.screen";

import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ALERT_SCREEN, GRAPHS_SCREEN, WATCH_LIST_SCREEN } from "../routesName";

type MainStackProps = {
  name: string;
  component: React.ComponentType;
  options: BottomTabNavigationOptions;
};

export const mainRoutes: MainStackProps[] = [
  {
    name: ALERT_SCREEN,
    component: AlertScreen,
    options: {
      tabBarLabel: "Alerts",
      headerShown: false,
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <MaterialIcons name="add-alert" size={size} color={color} />
      ),
    },
  },
  {
    name: WATCH_LIST_SCREEN,
    component: WatchListScreen,
    options: {
      tabBarLabel: "WatchList",
      headerShown: false,
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <MaterialIcons name="list" size={size} color={color} />
      ),
    },
  },
  {
    name: GRAPHS_SCREEN,
    component: GraphsScreen,
    options: {
      tabBarLabel: "Graphs",
      headerShown: false,
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Entypo name="bar-graph" size={size} color={color} />
      ),
    },
  },
];
