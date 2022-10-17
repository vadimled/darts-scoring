import './app.scss';
import { FC, useEffect } from 'react';
import Exercise from './layouts/exercise';
import { useActions, useAppSelector } from './store/hooks';
import { getExerciseResult } from './store/selectors/user-selector';
import { getExercises } from './store/selectors/current-selectors';

const App: FC = () => {
  const exerciseResult = useAppSelector(getExerciseResult);
  const exercises = useAppSelector(getExercises);
  const { SAVE_EXERCISES_RESULT, CLEAR_CURRENT_DATA } = useActions();

  useEffect(() => {
    if (exerciseResult > 0) {
      SAVE_EXERCISES_RESULT({ exercises, exerciseResult });
      CLEAR_CURRENT_DATA();
    }
  }, [exerciseResult]);
  return (
    <div className='app'>
      <header className='header'>Exercise</header>
      <Exercise />
      <div className='show-result'>{exerciseResult}</div>
      <div className='show-legs-table'></div>
    </div>
  );
};

export default App;
