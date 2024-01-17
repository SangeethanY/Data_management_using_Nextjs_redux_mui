import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "@/app/redux/storeSlice";
export const store = configureStore({
  reducer: {
    product: rootReducer,
  },
});

export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch;