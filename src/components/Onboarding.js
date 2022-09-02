import { useState, useCallback } from 'react'
import { Button, Container } from '@mui/material';
import ExerciseSelect from './ExerciseSelect';
import ExerciseDisplay from './ExerciseDisplay';
import '../index.css'

function OnBoarding() {
    const [userExercises, setUserExercises] = useState([])
    const [showForm, setShowForm] = useState(true);

    // ⭐ We talked about this function in the interview but I had never used it
    // Prevents rerender of exerciseDisplay
    const addExercise = useCallback(state => {
        setUserExercises(current => {return [state, ...current]});
        setShowForm(false)
    }, [])
        
  return (
    <main>
        <Container maxWidth="m" sx={{display: 'flex', flexDirection: 'column'}}>
            <h1>Hello!</h1>
            <p>Since this is a sample app, there won't be a full registration flow.</p>
            <p>But I'd still like to get an idea of your goals!</p>
            <p> (This app uses localStorage to keep track of your data.)</p>
            <ExerciseDisplay exerciseList={userExercises} />
            {showForm && <ExerciseSelect addExercise={addExercise} />}
            {!showForm && <Button onClick={() => setShowForm(true)}> Add more</Button>}
            {userExercises.length > 0 && <Button variant="contained">Done</Button>}
        </Container>
    </main>
  );
}

export default OnBoarding;
