import React, { useState, useEffect, useReducer, useCallback } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Card, Input, Button } from "react-native-elements";

import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

import { LinearGradient } from "expo-linear-gradient";

import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import * as authActions from "../../store/actions/authActions";
import { IFormInput, IAuthState } from "../../types";

const AuthScreen = (props: any): JSX.Element => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [
        { text: "Okay", onPress: () => setError('') },
      ]);
      return;
    }
  }, [error]);

  const authHandler = async (formData: IFormInput) => {
    let action;
    if (isSignup) {
      action = authActions.signup(formData.email, formData.password);
    } else {
      action = authActions.login(formData.email, formData.password);
    }
    setIsLoading(true);

    try {
      await dispatch(action);
      props.navigation.navigate("BooksList");
    } catch (err) {      
      setError(err);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const ReviewSchema = yup.object().shape({
    email: yup.string().email("Please check email").required("Email required"),
    password: yup
      .string()
      .required("Password required")
      .min(6, "Minimum 6 characters required"),
  });

  return (
    <KeyboardAvoidingView style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={["#ffedff", "#ffe3ff"]} style={styles.gradient}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={ReviewSchema}
            onSubmit={(values: IFormInput, { resetForm }) => {              
              setError("");
              authHandler(values);
              resetForm();
            }}
          >
            {(formikProps: any) => (
              <Card containerStyle={styles.cardStyle}>
                <ScrollView>
                  <Input
                    label="Your email"
                    placeholder="email@address.com"
                    leftIcon={{ type: "Ionicons", name: "mail-outline" }}
                    value={formikProps.values.email}
                    onChangeText={formikProps.handleChange("email")}
                    onBlur={formikProps.handleBlur("email")}
                  />
                  <Text style={styles.errorText}>
                    <ErrorMessage name="email" />
                  </Text>
                  <Input
                    label="Password"
                    secureTextEntry
                    placeholder="Password"
                    leftIcon={{ type: "Ionicons", name: "lock-outline" }}
                    value={formikProps.values.password}
                    onChangeText={formikProps.handleChange("password")}
                    onBlur={formikProps.handleBlur("password")}
                  />
                  <Text style={styles.errorText}>
                    <ErrorMessage name="password" />
                  </Text>
                  <Button
                    title={isSignup ? "Sign Up" : "Login"}
                    type="solid"
                    loading={isLoading}
                    raised={true}
                    onPress={formikProps.handleSubmit}
                    buttonStyle={styles.buttonStyle}
                  />
                  <Button
                    title={`Switch to ${isSignup ? "Login" : "Sign Up"}`}
                    type="solid"
                    raised={true}
                    onPress={() => {
                      setIsSignup((prevState) => !prevState);
                    }}
                    buttonStyle={styles.buttonStyle}
                  />
                  <Button
                    title="Clear Form"
                    type="solid"
                    raised={true}
                    onPress={() => {
                      formikProps.resetForm(formikProps.initialValues);
                    }}
                    buttonStyle={{
                      ...styles.buttonStyle,
                      ...{ backgroundColor: Colors.accent },
                    }}
                  />
                </ScrollView>
              </Card>
            )}
          </Formik>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: "Login / Signup",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cardStyle: {
    width: "70%",
    maxWidth: 450,
    paddingHorizontal: 5,
    paddingVertical: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: Dimensions.get("window").height / 10,
    marginBottom: 10,
  },

  gradient: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  buttonStyle: {
    marginVertical: 5,
    backgroundColor: Colors.primary,
  },
});

export default AuthScreen;
