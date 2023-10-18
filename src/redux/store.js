import { configureStore } from "@reduxjs/toolkit";
import { ticketSlice } from "./ticketSlice";
import { ticketSelectSlice  } from "./selectTicketSlice";

const rootReducer = {
  ticketSlice,
  ticketSelectSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});
