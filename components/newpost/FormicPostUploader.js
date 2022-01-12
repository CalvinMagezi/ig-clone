import { Formik } from "formik";
import { View, Text, TextInput, Image, Button } from "react-native";
import tailwind from "tailwind-rn";

import * as Yup from "yup";
import { useState } from "react";
import { Divider } from "react-native-elements";

import validUrl from "valid-url";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached max character limit"),
});

const PLACEHOLDER_IMG =
  "https://www.magezi.tech/_next/image?url=%2Flogo-l.png&w=1920&q=75";

const FormicPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("Your Post was addded successfully");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View style={tailwind("flex flex-row justify-between m-5")}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACEHOLDER_IMG,
              }}
            />

            <View style={tailwind("flex-1 ml-5")}>
              <TextInput
                style={tailwind("text-white text-lg")}
                placeholderTextColor="gray"
                placeholder="Write a caption"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={tailwind("text-white")}
            placeholderTextColor="gray"
            placeholder="Enter Image Url"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            values={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={tailwind("text-red-500 text-sm")}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormicPostUploader;
