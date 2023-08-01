import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

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
