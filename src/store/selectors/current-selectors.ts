import { RootState } from '../store';

export const getExerciseState = (state: RootState) =>
  state.current?.set?.exerciseStarted;

export const getCurrentExercise = (state: RootState) =>
  state.current?.set?.currentExercise;

export const getSteps = (state: RootState) => state.current?.set?.exercises;

export const getStepCounter = (state: RootState) =>
  state.current?.set?.currentStep;

export const getExercises = (state: RootState) => state.current?.set?.exercises;

// export const getStepResult = createDraftSafeSelector(
//   getCurrentStep,
//   getSteps,
//   (key, obj) => obj?.[key]
// );
