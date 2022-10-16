import './exercise.scss';
import { useActions, useAppSelector } from '../../store/hooks';
import { getExerciseState } from '../../store/selectors/current-selectors';
import { Button, InputNumber } from 'antd';
import { KeyboardEvent, useState } from 'react';

const Exercise = () => {
  const exerciseState = useAppSelector(getExerciseState);
  // const stepResult = useAppSelector(getStepResult || 0);

  const { SET_EXERCISE_STATE_CHANGED, SET_EXERCISE_RESULT } = useActions();
  const [inputValue, setInputValue] = useState<number | null>(0);

  const onExerciseState = () => {
    SET_EXERCISE_STATE_CHANGED();
  };

  const onResultEntered = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e as KeyboardEvent).key === 'Enter') {
      SET_EXERCISE_RESULT(inputValue);
      setInputValue(0);
    }
  };

  return (
    <div className='exercise-wrapper'>
      <Button
        type='primary'
        shape='round'
        size={'large'}
        className='start-exercise'
        disabled={exerciseState}
        onClick={onExerciseState}>
        Start Exercise
      </Button>
      <InputNumber
        className='successes-times'
        name='enteredResults'
        value={inputValue}
        onKeyDown={onResultEntered}
        onChange={(val) => setInputValue(val)}
      />
    </div>
  );
};

export default Exercise;
