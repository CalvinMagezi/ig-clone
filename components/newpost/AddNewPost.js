import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import FormicPostUploader from "./FormicPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormicPostUploader navigation={navigation} />
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://cdn-icons.flaticon.com/png/512/5708/premium/5708793.png?token=exp=1641985588~hmac=aa4d58c7e9b23080f7de0519b4e3dcfa",
          }}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
      <Text style={tailwind("text-white font-bold text-lg mr-5 uppercase")}>
        Add New Post
      </Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AddNewPost;
