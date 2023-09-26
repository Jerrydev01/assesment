import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import BottomNavBar from "../component/common/BottomNavBar";
import IndividualProduct from "../screens/IndivitualProduct";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={BottomNavBar}
        />
        {/* <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Onboarding"
          component={Index}
        /> */}

        <Stack.Screen
          options={({ route }) => ({
            title: `IndividualProduct ID: ${route.params.id}`,
            headerShown: false,
          })}
          name="IndividualProduct"
          component={IndividualProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackScreen;
