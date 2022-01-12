import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import tailwind from "tailwind-rn";

import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import "firebase/compat/auth";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to be at least 8 characters"),
  });

  const onlogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.push("HomeScreen");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(
          "Whoops...",
          errorMessage + "\n\n How would you like to deal with this ??",
          [
            {
              text: "Try Again",
              onPress: () => {
                console.log("Ok");
              },
              style: "cancel",
            },
            {
              text: "Sign Up",
              onPress: () => navigation.push("SignUpScreen"),
            },
          ]
        );
      });
  };
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onlogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validationOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                tailwind(
                  `${
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "border-black"
                      : "border-red-500"
                  } border rounded-md py-3 px-1 mt-3`
                ),
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={tailwind(
                `${
                  1 > values.password.length || values.password.length > 6
                    ? "border-black "
                    : "border-red-500"
                } border rounded-md py-3 mt-5 px-1`
              )}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <TouchableOpacity>
              <View style={tailwind("items-end pb-5")}>
                <Text style={tailwind("text-blue-400 ")}>Forgot password?</Text>
              </View>
            </TouchableOpacity>
            <Pressable
              onPress={handleSubmit}
              titleSize={20}
              disabled={!isValid}
              style={[
                styles.button(isValid),
                tailwind("text-white py-5 px-5 text-center rounded-md"),
              ]}
            >
              <Text style={tailwind("text-white font-bold text-center")}>
                Log in
              </Text>
            </Pressable>
            <View
              style={tailwind(
                "items-center flex-row text-center pt-5 justify-center"
              )}
            >
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push("SignUpScreen")}>
                <Text style={tailwind("text-blue-400")}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096f6" : "#9acaf7",
  }),
});

export default LoginForm;
