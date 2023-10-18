import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tickets: [],
  users: [],
};

export const ticketSlice = createReducer(initialState, (builder) => {
  builder
    .addCase("dataRequest", (state) => {
      state.loading = true;
    })
    .addCase("dataSuccess", (state, action) => {
      state.loading = false;
      state.tickets = action.payload.tickets;
      state.users = action.payload.users;
    })
    .addCase("dataFailure", (state) => {
      state.loading = false;
      state.tickets = [];
      state.users = [];
    });
});
