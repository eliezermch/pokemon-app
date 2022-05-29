import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import { getFavoritesApi } from "../../api/favorite";

const UserData = () => {
  const { auth, logout } = useAuth();
  const [total, setTotal] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        try {
          const response = await getFavoritesApi();
          setTotal(size(response));
        } catch (err) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.context}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Favorites" text={`${total} pokemons`} />
      </View>

      <Button title="Log out" onPress={logout} />
    </View>
  );
};

export { UserData };

const ItemMenu = (props) => {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  context: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
});
