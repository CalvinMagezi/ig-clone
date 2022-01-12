import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={tailwind("mb-5")}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                source={{ uri: story.image }}
                style={tailwind("w-12 h-12 ml-6 border-2 rounded-full")}
              />
              <Text style={tailwind("text-white")}>
                {story.user.length > 11
                  ? story.user.slice(0, 8).toLowerCase() + ".."
                  : story.user.toLowerCase()}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
