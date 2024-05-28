import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import modalReducer from "./slices/modal.slice";
import postReducer from "./slices/post.slice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    posts: postReducer,
    auth: authReducer,
  },
});

export default store;
