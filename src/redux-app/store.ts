/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { DiscountReducer } from "./discount-module";

export const store = configureStore({
  reducer: {
    Discount: DiscountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
