import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";

const Header = ({ navigation }) => {
  return (
    <View style={tailwind("flex flex-row justify-between items-center")}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/insta-word-logo.png")}
        />
      </TouchableOpacity>
      <View style={tailwind("flex flex-row justify-evenly")}>
        <TouchableOpacity onPress={() => navigation.push("NewPost")}>
          <Image
            style={tailwind(" mx-1 w-6 h-6")}
            source={require("../../assets/fancy-plus-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={tailwind(" mx-1 w-6 h-6")}
            source={require("../../assets/heart-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={tailwind(
              "bg-red-600 absolute right-0 mb-10 z-10 rounded-full px-1"
            )}
          >
            <Text style={tailwind("text-white text-xs")}>11</Text>
          </View>
          <Image
            style={tailwind(" mx-1 w-6 h-6")}
            source={require("../../assets/message-icon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

export default Header;
