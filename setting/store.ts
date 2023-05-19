import { configureStore } from "@reduxjs/toolkit";
import action_Slice from "./action_slice";
export const store = configureStore({
  reducer: {
    actionslice: action_Slice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;



