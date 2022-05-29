import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const NoLogged = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>You need to Log In</Text>
      <Button title="Log In" onPress={() => navigation.navigate("Account")} />
    </View>
  );
};

export { NoLogged };

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
