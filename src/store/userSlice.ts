import { createSlice } from '@reduxjs/toolkit';

interface IUserData {
  exercises: IExercise[];
}

export interface ISet {
  [setName: string]: number;
}

interface IExercise {
  name: string;
  date: Date | undefined;
  exercises: ISet[];
  exerciseResult: number;
}

type IExerciseCurrentResult = Omit<IExercise, 'name' | 'date'>;

const initialUserData: IUserData = {
  // https://www.youtube.com/watch?v=H6gOjEwe874
  // 10 sets
  exercises: []
};

const userSlice = createSlice({
  initialState: {
    userName: 'Vadim',
    userData: initialUserData
  },
  name: 'user',
  reducers: {
    SAVE_EXERCISES_RESULT: (state, { payload }) => {
      const { exercises, exerciseResult } = payload as IExerciseCurrentResult;
      state.userData.exercises.push({
        name: 'Complex 1',
        date: new Date(),
        exerciseResult,
        exercises
      } as IExercise);
    }
  },
  extraReducers: undefined
});

export const userSliceReducer = userSlice.reducer;
export const userSliceAction = userSlice.actions;
