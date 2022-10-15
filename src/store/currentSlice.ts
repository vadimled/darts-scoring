import {createSlice} from '@reduxjs/toolkit';

interface ICurrent {
    exerciseStarted: boolean
}

const initialCurrentData: ICurrent =  {
    exerciseStarted: false
};

const currentSlice = createSlice({
    initialState: initialCurrentData,
    name: 'current',
    reducers: {
        SET_EXERCISE_STATE_CHANGED: (state) => {
            state.exerciseStarted = !state.exerciseStarted;
        }
    },
    extraReducers: undefined
});

export const currentSliceAction = currentSlice.actions;
export const currentSliceReducer = currentSlice.reducer;
