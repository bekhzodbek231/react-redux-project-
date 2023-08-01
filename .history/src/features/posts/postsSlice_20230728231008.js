import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Atomic habits",
    content: "little changes everyday could lead dramatic results",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      liked: 0,
      disliked: 0,
      comments: 0,
    },
  },
  {
    id: "2",
    title: "Eat that frog",
    content: "how do you eat the biggest and aglyest frog?",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      liked: 0,
      disliked: 0,
      comments: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid,
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              liked: 0,
              disliked: 0,
              comments: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPosts = state.find((post) => post.id === postId);
      if (existingPosts) {
        existingPosts.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
