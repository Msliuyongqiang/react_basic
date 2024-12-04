import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const channelSlice = createSlice({
  name: "channelSlice",
  initialState: {
    channelValue: "",
  },
  reducers: {
    setChannelValue(state, action) {
      state.channelValue = action.payload;
      console.log("%cState中的数据", "color:green", state.channelValue);
    },
  },
});
//异步请求
const { setChannelValue } = channelSlice.actions;
const fetchChannelValue = () => {
  return async (dispatch) => {
    const fetchValue = await axios.get("http://geek.itheima.net/v1_0/channels");
    console.log("%c异步请求过来的数据fetchValue", "color:red", fetchValue.data);
    const data = fetchValue?.data?.data?.channels;
    dispatch(setChannelValue(data));
  };
};

export { fetchChannelValue };
export default channelSlice.reducer;
