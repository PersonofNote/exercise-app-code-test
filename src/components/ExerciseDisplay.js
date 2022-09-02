import Button from '@mui/material/Button';

function ExerciseDisplay({exerciseList}) {
    const exerciseDisplay = exerciseList.map((e, index) => ( 
        <li className="centered-flex-row" key={`${e.index}-${e.exercise}`}><div>I would like to {e.exercise} for {e.minutes} minutes every {e.interval}</div> <Button value={index} >Remove </Button></li>
        ))
    return (
        <ul className="exercise-list">{exerciseDisplay}</ul>
    )
}


export default ExerciseDisplay;