import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favorite } from "../screens/Favorite";
import { Pokemon } from "../screens/Pokemon";

const Stack = createStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export { FavoriteNavigation };
