import { useState } from 'react'
import { Button, Container } from '@mui/material';
import ExerciseSelect from './ExerciseSelect';

function OnBoarding() {
    const userExercises = []
    const [showForm, setShowForm] = useState(true);

    const addExercise = (state) => {
        console.log("TEST")
       userExercises.push(state)
       console.log(userExercises)
       // setShowForm(false)
    }
    /*
    const [step, setStep] = useState(0)
    const incrementStep = e => {
        e.target.value === "forward" ? setStep(step + 1) : setStep(step - 1);
    }
    */
  return (
    <main>
        <Container maxWidth="sm">
            <h1>Hello!</h1>
            <p>Since this is a sample app, there won't be a full registration flow.</p>
            <p>But I'd still like to get an idea of your goals!</p>
            <p> (This app uses localStorage to keep track of your data.)</p>
            {showForm && <ExerciseSelect addExercise={addExercise} />}
        </Container>
    </main>
  );
}

export default OnBoarding;
