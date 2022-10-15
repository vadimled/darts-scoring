import './exercise.scss';
import {useActions, useAppSelector} from '../../store/hooks';
import {getExerciseState} from '../../store/selectors/current-selectors';

const Exercise = () => {
    const exerciseState = useAppSelector(getExerciseState);
    const {SET_EXERCISE_STATE_CHANGED} = useActions();

    const onExerciseState = () => {
        SET_EXERCISE_STATE_CHANGED();
    };

    const onResultEntered = () => {
        // dispatcher(SET_EXERCISE_STATE_CHANGED());
    };

    return (
        <div className='exercise-wrapper'>
        <button
            className='start-exercise'
            disabled={exerciseState}
            onClick={onExerciseState}>
            Start Exercise
        </button>
        <input
            type="number"
            name='enteredResults'
            onChange={onResultEntered}
        />
        </div>
    );
};

export default Exercise;
