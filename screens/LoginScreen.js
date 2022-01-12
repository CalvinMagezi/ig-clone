import { View, Text, Image } from "react-native";
import tailwind from "tailwind-rn";
import LoginForm from "../components/login/LoginForm";

const INSTAGRAM_LOGO = "https://cdn-icons-png.flaticon.com/512/174/174855.png";
const LoginScreen = ({ navigation }) => (
  <View style={tailwind("pt-20 px-10")}>
    <View style={tailwind("items-center mt-5")}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <LoginForm navigation={navigation} />
  </View>
);

export default LoginScreen;
