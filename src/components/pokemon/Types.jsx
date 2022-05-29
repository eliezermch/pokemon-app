import { View, Text, StyleSheet } from "react-native";
import { capitalize } from "lodash";
import React from "react";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

const Types = (props) => {
  const { types } = props;

  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text style={styles.text}> {item.type.name} </Text>
        </View>
      ))}
    </View>
  );
};

export { Types };

const styles = StyleSheet.create({
  content: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  text: {
    textTransform: "capitalize",
  },
});
