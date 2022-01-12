import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import tailwind from "tailwind-rn";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://cdn-icons-png.flaticon.com/512/1946/1946433.png",
    inactive:
      "https://cdn-icons.flaticon.com/png/512/1659/premium/1659146.png?token=exp=1641805548~hmac=19c2ab5a8555c04affb1cfd045298ccd",
  },
  {
    name: "Search",
    active: "https://cdn-icons-png.flaticon.com/512/3077/3077325.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/6546/6546356.png",
  },
  {
    name: "Reels",
    active: "https://cdn-icons-png.flaticon.com/512/3142/3142040.png",
    inactive:
      "https://cdn-icons.flaticon.com/png/512/5948/premium/5948481.png?token=exp=1641804603~hmac=3089515e58515a1cc5d4561f9fbd6f04",
  },
  {
    name: "Shop",
    active:
      "https://cdn-icons.flaticon.com/png/512/2981/premium/2981313.png?token=exp=1641805945~hmac=5b668b85ec5564af079842baedb0d93e",
    inactive:
      "https://cdn-icons.flaticon.com/png/512/2981/premium/2981314.png?token=exp=1641805586~hmac=7722083b52870612a18ccd7fdd8c9758",
  },
  {
    name: "Profile",
    active:
      "https://www.calvinmagezi.com/_next/image?url=%2Fprofile1.jpeg&w=3840&q=75",
    inactive:
      "https://www.calvinmagezi.com/_next/image?url=%2Fprofile1.jpeg&w=3840&q=75",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        style={[
          tailwind("w-6 h-6"),
          icon.name === "Profile" && styles.profilePic(),
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: activeTab === "Profile" ? 2 : 0,
  }),
});

export default BottomTabs;
