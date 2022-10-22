import './exercise-card.scss';
import cn from 'classnames';

import { FC } from 'react';

interface IExerciseCard {
  name: string;
  active: boolean;
  score: number;
}
const ExerciseCard: FC<IExerciseCard> = ({ name, active, score }) => {
  return (
    <div className={cn('exercise-card', { 'active-card': active })}>
      <div className='exercise-name'>{name}</div>
      <div className='exercise-score'>{score.toString()}</div>
    </div>
  );
};

export default ExerciseCard;
