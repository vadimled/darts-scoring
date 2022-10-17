import { RootState } from '../store';

export const getExerciseResult = (state: RootState) => state.current?.result;
