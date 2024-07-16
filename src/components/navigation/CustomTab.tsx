import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles/customTab.styles";

export function CustomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.root}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel?.toString() ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const Icon =
          options.tabBarIcon &&
          options.tabBarIcon({
            focused: isFocused,
            color: isFocused ? colors("greenNormal") : colors("blackNormal"),
            size: 22,
          });

        if (options.tabBarButton)
          return options.tabBarButton({
            onPress,
            accessibilityState: isFocused ? { selected: true } : {},
            testID: options.tabBarTestID,
            children: undefined,
          });

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabBtn}
          >
            {Icon && Icon}
            <Text
              style={{
                color: isFocused
                  ? colors("greenNormal")
                  : colors("blackNormal"),
                fontSize: 12,
                paddingTop: 5,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
