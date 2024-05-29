import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: JSON.parse(localStorage.getItem("posts")) || [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    updatePost(state, action) {
      const { id, title, content } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
        localStorage.setItem("posts", JSON.stringify(state.posts));
      }
    },
    deletePost(state, action) {
      const { postId, userId } = action.payload;
      state.posts = state.posts.filter(
        (post) => post.id !== postId || post.userId !== userId
      );
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
  },
});

export const { addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
