import { createSlice } from '@reduxjs/toolkit';
import { ISet } from './userSlice';

interface ICurrent {
  exerciseStarted: boolean;
  currentExercise: string;
  exercises: ISet[];
  currentStep: number;
  currentExerciseNumber: number;
}

const initialCurrentData: ICurrent = {
  exerciseStarted: false,
  currentExercise: '',
  currentExerciseNumber: 0,
  currentStep: 0,
  exercises: [
    { '20': 0 },
    { '19': 0 },
    { bull: 0 },
    { SP: 0 }, // set of points (try set maximum points)
    { HBR: 0 }, // half big round(1-10)
    { BR: 0 }, // big round(1-20)
    { '14': 0 } // doubles
  ]
};

const currentSlice = createSlice({
  initialState: {
    result: 0,
    set: { ...initialCurrentData }
  },
  name: 'current',
  reducers: {
    SET_EXERCISE_STATE_CHANGED: (state) => {
      const { exercises, exerciseStarted } = state.set;
      state.set.exerciseStarted = !exerciseStarted;
      const exerciseObj = exercises[state.set.currentExerciseNumber];
      state.set.currentExercise = Object.keys(exerciseObj)[0];
      state.set.currentStep = 1;
    },
    SET_EXERCISE_RESULT: (state, { payload }) => {
      const { exercises } = state.set;
      const exerciseObj = exercises[state.set.currentExerciseNumber];
      exerciseObj[state.set.currentExercise] += payload;
      state.set.currentStep += 1;
    },
    SET_EXERCISE_FINISHED: (state) => {
      const { exercises } = state.set;
      state.set.exerciseStarted = false;
      state.set.currentStep = 0;
      state.set.currentExerciseNumber += 1;
      if (exercises.length === state.set.currentExerciseNumber) {
        state.result = exercises.reduce((res, val) => {
          return res + Object.values(val)[0];
        }, 0);
        state.set.exerciseStarted = false;
        state.set.currentStep = 0;
        state.set.currentExerciseNumber = 0;
      }
    },
    CLEAR_CURRENT_DATA: (state) => {
      state.set = { ...initialCurrentData };
    }
  },
  extraReducers: undefined
});

export const currentSliceAction = currentSlice.actions;
export const currentSliceReducer = currentSlice.reducer;
