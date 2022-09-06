import Button from '@mui/material/Button';
import {exerciseDataList} from '../constants'

function ExerciseDisplay({exerciseList}) {
    const exerciseDisplay = exerciseList.map((e, index) => {
        const exerciseName = exerciseDataList[e.exercise].formattedName ? exerciseDataList[e.exercise].formattedName : e.exercise
        return ( 
        <li className="centered-flex-row" key={`${e.index}-${e.exercise}`}><div>I would like to {exerciseName} for {e.minutes} minutes every {e.interval}</div> <Button value={index}> Remove </Button></li>
        )
    })
        return (
            <ul className="exercise-list">{exerciseDisplay}</ul>
        )
}


export default ExerciseDisplay;