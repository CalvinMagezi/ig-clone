import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import tailwind from "tailwind-rn";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1029/1029132.png",
    likedImageUrl: "https://cdn-icons-png.flaticon.com/512/6463/6463027.png",
  },
  {
    name: "Comment",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2190/2190552.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://cdn-icons.flaticon.com/png/512/2099/premium/2099122.png?token=exp=1641766056~hmac=66b084727ff0275410fc560de4ebc83a",
  },
  {
    name: "Save",
    imageUrl:
      "https://cdn-icons.flaticon.com/png/512/5667/premium/5667029.png?token=exp=1641766168~hmac=bafff2783a01ec0ae1ef5c56824be274",
  },
];

const Post = ({ post }) => {
  return (
    <View style={tailwind("mb-10")}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        {post.comments?.length > 0 && <CommentsSection post={post} />}
        {post.comments?.length > 0 && <Comments post={post} />}
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={tailwind("flex flex-row justify-between m-2 items-center")}>
    <TouchableOpacity>
      <View style={tailwind("flex flex-row items-center")}>
        <Image
          source={{ uri: post.profile_picture }}
          style={tailwind("w-10 h-10 ml-2 border-2 rounded-full")}
        />
        <Text style={tailwind("text-white ml-2 font-bold")}>{post.user}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={tailwind("text-lg text-white font-bold")}>...</Text>
    </TouchableOpacity>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageurl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={tailwind("flex flex-row justify-between items-center")}>
    <View style={tailwind("flex flex-row")}>
      <Icon
        imgStyle={tailwind("w-6 h-6 ")}
        imgUrl={postFooterIcons[0].imageUrl}
      />
      <Icon
        imgStyle={tailwind("w-6 ml-5  h-6")}
        imgUrl={postFooterIcons[1].imageUrl}
      />
      <Icon
        imgStyle={tailwind("w-6 ml-5  h-6")}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>
    <View>
      <Icon
        imgStyle={tailwind("w-6  h-6 ")}
        imgUrl={postFooterIcons[3].imageUrl}
      />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={tailwind("flex flex-row mt-2 items-center")}>
    <Text style={tailwind("text-white font-bold")}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <Text style={tailwind("text-white mt-2")}>
    <Text style={tailwind("font-bold")}>{post.user} </Text>
    <Text> {post.caption}</Text>
  </Text>
);

const CommentsSection = ({ post }) => (
  <TouchableOpacity>
    <Text style={tailwind("text-gray-400 mt-1")}>
      View {post.comments.length > 1 ? "all " : ""}
      {post.comments.length}
      {post.comments.length > 1 ? " comments" : " comment"}
    </Text>
  </TouchableOpacity>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={tailwind("mt-1")}>
        <Text style={tailwind("text-white")}>
          <Text style={tailwind("font-bold")}>{comment.user} </Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

export default Post;
