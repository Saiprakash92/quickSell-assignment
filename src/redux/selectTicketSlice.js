import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  ticketSelected: [],
  user: false,
  message: null,
};

export const ticketSelectSlice = createReducer(initialState, (builder) => {
  builder
    .addCase("ticketSelectRequest", (state) => {
      state.loading = true;
      state.ticketSelected = [];
      state.message = null;
    })
    .addCase("ticketSelectSuccess", (state, action) => {
      state.loading = false;
      state.ticketSelected = action.payload.ticketSelected;
      state.user = action.payload.user;
      state.message = null;
    })
    .addCase("ticketSelectFailure", (state, action) => {
      state.loading = false;
      state.ticketSelected = [];
      state.user = false;
      state.message = action.payload.message;
    });
});
