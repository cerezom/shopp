import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { colors } from "../constans/colors";
import { CartScreen } from "../screens/index";
import { isIOS } from "../utils/function";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary,
        },
        headerTintColor: isIOS ? colors.text : colors.textLight,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
        },
      }}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;