import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  dataSelected: [],
  user: false,
  message: null,
};

export const ticketSelectSlice = createReducer(initialState, (builder) => {
  builder
    .addCase("dataSelectRequest", (state) => {
      state.loading = true;
      state.dataSelected = [];
      state.message = null;
    })
    .addCase("dataSelectSuccess", (state, action) => {
      state.loading = false;
      state.dataSelected = action.payload.dataSelected;
      state.user = action.payload.user;
      state.message = null;
    })
    .addCase("dataSelectFailure", (state, action) => {
      state.loading = false;
      state.dataSelected = [];
      state.user = false;
      state.message = action.payload.message;
    });
});
