import { USERS } from "./users";
export const POSTS = [
  {
    imageurl:
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1783&q=80",
    user: USERS[0].user,
    likes: 7870,
    caption:
      "Building a realy dope multi lined comment to test my multi lined really cool instagram build thingy you know lolololololololololol.",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "johncassey",
        comment: "Wow. This build is amazing.",
      },
      {
        user: "amandawalker",
        comment: "I kiss my pinky toe goodnight everyday day.",
      },
    ],
  },
  {
    imageurl:
      "https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
    user: USERS[1].user,
    likes: 787,
    caption: "Post 2",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "johncassey",
        comment: "Wow. This build is amazing.",
      },
    ],
  },
  {
    imageurl:
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    user: USERS[2].user,
    likes: 700,
    caption: "Post 3",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "johncassey",
        comment: "Wow. This build is amazing.",
      },
      {
        user: "amandawalker",
        comment: "I kiss my pinky toe goodnight everyday day.",
      },
    ],
  },
  {
    imageurl:
      "https://images.unsplash.com/photo-1611153662496-c232240334a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    user: USERS[3].user,
    likes: 111,
    caption: "Post 4",
    profile_picture: USERS[3].image,
  },
  {
    imageurl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    user: USERS[4].user,
    likes: 120,
    caption: "Post 4",
    profile_picture: USERS[4].image,
    comments: [
      {
        user: "johncassey",
        comment: "Wow. This build is amazing.",
      },
      {
        user: "amandawalker",
        comment: "I kiss my pinky toe goodnight everyday day.",
      },
    ],
  },
];
