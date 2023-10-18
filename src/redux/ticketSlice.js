import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tickets: [],
  users: [],
};

export const ticketSlice = createReducer(initialState, (builder) => {
  builder
    .addCase("ticketRequest", (state) => {
      state.loading = true;
    })
    .addCase("ticketSuccess", (state, action) => {
      state.loading = false;
      state.tickets = action.payload.tickets;
      state.users = action.payload.users;
    })
    .addCase("ticketFailure", (state) => {
      state.loading = false;
      state.tickets = [];
      state.users = [];
    });
});
