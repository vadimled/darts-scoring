import './exercise.scss';
import { useActions, useAppSelector } from '../../store/hooks';
import {
  getCurrentExercise,
  getExercises,
  getExerciseState,
  getStepCounter
} from '../../store/selectors/current-selectors';
import { Button, InputNumber } from 'antd';
import {
  KeyboardEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import ExerciseCard from '../../components/exercise-card';
import cn from 'classnames';
import { STEPS_LIMIT } from '../../utils/constants';
import { getExerciseResult } from '../../store/selectors/user-selector';

const Exercise = () => {
  const exerciseState = useAppSelector(getExerciseState);
  const currentExercise = useAppSelector(getCurrentExercise);
  const stepCounter = useAppSelector(getStepCounter);
  const exercises = useAppSelector(getExercises);
  const exerciseResult = useAppSelector(getExerciseResult);
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const {
    SET_EXERCISE_STATE_CHANGED,
    SET_EXERCISE_RESULT,
    SET_EXERCISE_FINISHED
  } = useActions();
  const [inputValue, setInputValue] = useState<null | number>(null);

  useLayoutEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [stepCounter, exerciseState]);

  useLayoutEffect(() => {
    if (btnRef && exerciseResult === 0) {
      btnRef.current?.focus();
    }
  }, [exerciseState]);

  useEffect(() => {
    if (stepCounter > STEPS_LIMIT) {
      SET_EXERCISE_FINISHED();
    }
  }, [stepCounter]);

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
          ref={btnRef}
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
      </div>
      <div className='exercise-cards-wrapper'> {renderCards()} </div>
      {stepCounter > 0 && (
        <div
          className={cn('step-counter', {
            'last-step': stepCounter === STEPS_LIMIT
          })}>
          {stepCounter}
        </div>
      )}
    </div>
  );
};

export default Exercise;
