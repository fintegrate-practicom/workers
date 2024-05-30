
// import {  createSlice } from "@reduxjs/toolkit";
// import { RootState } from "./store";
// import axios from "axios";
// const http='http://localhost:3001/'
// const res =await axios.get(`${http}message/664c4ced63112b0c0f736930`)
// const { data = {} } = res.data;
// const messageSlice = createSlice({
//     name: "messages",
//     initialState: data,
//     reducers: {}
// })

// export const { } = messageSlice.actions;
// export const selectMessage = (state: RootState) => state.messageSlice.messages;
// export default messageSlice.reducer;


import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import message from "../classes/message";

// Define a type for the slice state
interface MessageState {
  messages: message[];
}

// Define the initial state using that type
const initialState: MessageState = {
  messages: [],
};

// Async thunk to fetch messages
export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async (employeeId: string) => {
    const response = await axios.get(`http://localhost:3001/message/${employeeId}`);
    return response.data;
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action: PayloadAction<message[]>) => {
      state.messages = action.payload;
    });
  },
});

export const selectMessages = (state: RootState) => state.messageSlice.messages;
export default messageSlice.reducer;
