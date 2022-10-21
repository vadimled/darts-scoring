import './exercise.scss';
import { useActions, useAppSelector } from '../../store/hooks';
import {
  getCurrentExercise,
  getExercises,
  getExerciseState,
  getStepCounter
} from '../../store/selectors/current-selectors';
import { Button, InputNumber } from 'antd';
import { KeyboardEvent, useLayoutEffect, useRef, useState } from 'react';
import ExerciseCard from '../../components/exercise-card';

const Exercise = () => {
  const exerciseState = useAppSelector(getExerciseState);
  const currentExercise = useAppSelector(getCurrentExercise);
  const stepCounter = useAppSelector(getStepCounter);
  const exercises = useAppSelector(getExercises);
  const inputRef = useRef<HTMLInputElement>(null);

  const { SET_EXERCISE_STATE_CHANGED, SET_EXERCISE_RESULT } = useActions();
  const [inputValue, setInputValue] = useState<null | number>(null);

  useLayoutEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [stepCounter, exerciseState]);

  const onExerciseState = () => {
    SET_EXERCISE_STATE_CHANGED();
  };

  const onResultEntered = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e as KeyboardEvent).key === 'Enter') {
      SET_EXERCISE_RESULT(inputValue);
      setInputValue(null);
    }
  };
  const onChange = (e: number | null) => {
    if (inputRef) {
      inputRef.current?.focus();
    }
    e && setInputValue(+e);
  };

  const renderCards = () => {
    return exercises.map((exercise) => {
      const name = Object.keys(exercise)[0];
      const score = Object.values(exercise)[0];

      return (
        <ExerciseCard
          key={name}
          active={currentExercise === name}
          name={name}
          score={score}
        />
      );
    });
  };

  return (
    <div className='exercise-wrapper'>
      <div className='exercise-actions'>
        <Button
          type='primary'
          shape='round'
          size={'large'}
          className='start-exercise-btn'
          disabled={exerciseState}
          onClick={onExerciseState}>
          Start Exercise
        </Button>
        {exerciseState && (
          <InputNumber
            ref={inputRef}
            className='successes-times'
            name='enteredResults'
            // inputMode='numeric'
            value={inputValue as number}
            onKeyDown={onResultEntered}
            controls={false}
            onChange={onChange}
          />
        )}
        <div className='step-counter'>{stepCounter > 0 && stepCounter}</div>
      </div>
      <div className='exercise-cards-wrapper'> {renderCards()} </div>
    </div>
  );
};

export default Exercise;
