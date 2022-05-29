import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const [error, setError] = React.useState("");

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("The username or the password are incorrect");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        placeholder="user name"
        style={styles.input}
        autoCapitalize={"none"}
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <View style={styles.btn}>
        <Button title="Log in" onPress={formik.handleSubmit} />
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export { LoginForm };

const initialValues = () => {
  return {
    username: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    username: Yup.string().required("You have to fill out the username field"),
    password: Yup.string().required("You have to fill out password field"),
  };
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    marginHorizontal: 40,
    marginTop: 12,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
