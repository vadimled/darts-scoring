import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { currentSliceAction } from './currentSlice';
import { userSliceAction } from './userSlice';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
  ...currentSliceAction,
  ...userSliceAction
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(actions, dispatch);
};
