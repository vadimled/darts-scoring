import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import currentSlice from './currentSlice';

export const store = configureStore({
  reducer: {
	user: userSlice,
	current: currentSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
