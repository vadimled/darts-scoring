import {RootState} from '../store';

export const getExerciseState =
    (state: RootState) => state.current.exerciseStarted;
