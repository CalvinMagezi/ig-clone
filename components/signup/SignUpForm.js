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

import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth, db } from "../../firebase";

const SignUpForm = ({ navigation }) => {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to be at least 8 characters"),
  });

  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const onregister = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        db.collection("users").add({
          owner_uid: user.uid,
          username: username,
          email: user.email,
          profile_picture: getRandomProfilePicture(),
        });
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
              text: "Sign In",
              onPress: () => navigation.push("LoginScreen"),
            },
          ]
        );
      });
  };
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={(values) => {
          onregister(values.email, values.password, values.username);
        }}
        validationSchema={SignUpFormSchema}
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
                placeholder="Email"
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
              style={[
                tailwind(
                  `${
                    1 > values.username.length || values.username.length > 3
                      ? "border-black"
                      : "border-red-500"
                  } border rounded-md py-3 px-1 mt-3`
                ),
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={tailwind(
                `${
                  1 > values.password.length || values.password.length > 6
                    ? "border-black "
                    : "border-red-500"
                } border rounded-md py-3 my-5 px-1`
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
                Sign Up
              </Text>
            </Pressable>
            <View
              style={tailwind(
                "items-center flex-row text-center pt-5 justify-center"
              )}
            >
              <Text>Already Have An Account?</Text>
              <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
                <Text style={tailwind("text-blue-400")}>Sign In</Text>
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

export default SignUpForm;
