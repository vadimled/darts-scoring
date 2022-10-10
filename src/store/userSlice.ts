import {createSlice} from '@reduxjs/toolkit';

interface IUserData {
    exercises: IExercise[];
}

interface ISet {
    [setName: string]: number | undefined
}

interface IExercise {
    name: string,
    date: Date | undefined,
    steps: ISet
}

const initialUserData: IUserData =  {
    // https://www.youtube.com/watch?v=H6gOjEwe874
    // 10 sets
    exercises: [
        {
            name: 'complex1',
            date: undefined,
            steps: {
                '20': undefined,
                '19': undefined,
                'bull': undefined,
                'SP': undefined, // set of points (try set maximum points)
                'HBR': undefined, // half big round(1-10)
                'BR': undefined, // half big round(1-20)
                '14': undefined // doubles
                }
        }
    ]
};

const userSlice = createSlice({
    initialState: {
        userName: 'Vadim',
        userData: initialUserData
    },
    name: 'user',
    reducers: {},
    extraReducers: undefined
});

export default userSlice.reducer;
