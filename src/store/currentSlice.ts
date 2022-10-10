import {createSlice} from '@reduxjs/toolkit';

// interface IUserData {
//     exercises: IExercise[];
// }
//
// interface ISet {
//     [setName: string]: number | undefined
// }
//
interface ICurrent {
    exerciseStarted: boolean
}

const initialCurrentData: ICurrent =  {
    exerciseStarted: false
};

const currentSlice = createSlice({
    initialState: initialCurrentData,
    name: 'current',
    reducers: {},
    extraReducers: undefined
});

export default currentSlice.reducer;
