import { createSlice } from '@reduxjs/toolkit';
import { ISet } from './userSlice';

interface ICurrent {
  exerciseStarted: boolean;
  currentStep: string;
  steps: ISet;
}

const initialCurrentData: ICurrent = {
  exerciseStarted: false,
  currentStep: '',
  steps: {
    '20': undefined,
    '19': undefined,
    bull: undefined,
    SP: undefined, // set of points (try set maximum points)
    HBR: undefined, // half big round(1-10)
    BR: undefined, // half big round(1-20)
    '14': undefined // doubles
  }
};

const currentSlice = createSlice({
  initialState: initialCurrentData,
  name: 'current',
  reducers: {
    SET_EXERCISE_STATE_CHANGED: (state) => {
      state.exerciseStarted = !state.exerciseStarted;
      state.currentStep = '20';
    },
    SET_EXERCISE_RESULT: (state, { payload }) => {
      state.steps[state.currentStep] = payload;
    }
  },
  extraReducers: undefined
});

export const currentSliceAction = currentSlice.actions;
export const currentSliceReducer = currentSlice.reducer;
