import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Keyboard } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles/customTab.styles";

export function CustomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  if (keyboardVisible) return null;

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
