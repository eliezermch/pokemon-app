import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { FavoriteNavigation } from "./FavoriteNavigation";
import { PokedexNavigation } from "./PokedexNavigation";
import { AccountNavigation } from "./AccountNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="heart" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const renderPokeball = () => {
  return (
    <Image
      source={require("../../assets/pokeball.png")}
      style={{ width: 70, height: 70, top: -15 }}
    />
  );
};

export { Navigation };
