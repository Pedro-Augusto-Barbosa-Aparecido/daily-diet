import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.stack.routes";
import { useTheme } from "styled-components/native";

export function Route() {
  const { COLORS } = useTheme();

  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY_700,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
