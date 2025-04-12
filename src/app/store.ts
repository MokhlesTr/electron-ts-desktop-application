import { configureStore } from "@reduxjs/toolkit";
import { API_APP } from "../services/API";

export const store = configureStore({
  reducer: {
    [API_APP.reducerPath]: API_APP.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API_APP.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
