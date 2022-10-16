import { createDraftSafeSelector } from '@reduxjs/toolkit';
import {RootState} from '../store';

export const getExerciseState =
    (state: RootState) => state.current?.exerciseStarted;

export const getCurrentStep =
    (state: RootState) => state.current?.currentStep;

export const getSteps =
    (state: RootState) => state.current?.steps;

export const getStepResult = createDraftSafeSelector(
    getCurrentStep,
    getSteps,
    (key ,obj) => obj?.[key]
);
