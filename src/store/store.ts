import { configureStore } from '@reduxjs/toolkit';
import { userSliceReducer } from './userSlice';
import { currentSliceReducer } from './currentSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    current: currentSliceReducer
  }
});
setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
