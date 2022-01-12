import { View, Image } from "react-native";
import tailwind from "tailwind-rn";
import SignUpForm from "../components/signup/SignUpForm";
const INSTAGRAM_LOGO = "https://cdn-icons-png.flaticon.com/512/174/174855.png";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={tailwind("pt-20 px-10")}>
      <View style={tailwind("items-center mt-5")}>
        <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
      </View>
      <SignUpForm navigation={navigation} />
    </View>
  );
};

export default SignUpScreen;
