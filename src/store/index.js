import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import channelSlice from "./reducers/channelSlice";
export default configureStore({
  reducer: {
    counterSlice,
    channelSlice,
  },
});
