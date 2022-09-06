import { useState, useCallback } from 'react'
import { Button, Container } from '@mui/material';
import ExerciseSelect from './ExerciseSelect';
import ExerciseDisplay from './ExerciseDisplay';
import '../index.css'

function OnBoarding({handleUser}) {
    const [userExercises, setUserExercises] = useState([])
    const [showForm, setShowForm] = useState(true);

    // ⭐ We talked about this function in the interview but I had never used it
    // Prevents rerender of exerciseDisplay
    const addExercise = useCallback(state => {
        setUserExercises(current => {return [state, ...current]});
        setShowForm(false)
    }, [])

    const removeExercise = (e) => {
        userExercises.length > 1 ? setUserExercises(userExercises.splice(e.target.value, 1)) : setUserExercises([])
    }

    const setUser = () => {
        localStorage.setItem('user', JSON.stringify(userExercises))
        const userData = localStorage.getItem('user');
        handleUser(JSON.parse(userData));
        /* If we were hitting a backend we would want to include a username and password as well as an exercises object, and persist the response to localstorage with JWT
        fetch(urlOfBackend, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, userExercises, etc... })
          })
        .then(response => response.json())
        .then(res => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(res));
            return user;
        });
        */
       
    }
        
  return (
    <main>
        <Container maxWidth="m" sx={{display: 'flex', flexDirection: 'column'}}>
            <h1>Hello!</h1>
            <p>Since this is a sample app, there won't be a full registration flow.</p>
            <p>But I'd still like to get an idea of your goals!</p>
            <p> (This app uses localStorage to keep track of your data.)</p>
            <ExerciseDisplay exerciseList={userExercises} removeExercise={removeExercise} />
            {showForm && <ExerciseSelect addExercise={addExercise} />}
            {!showForm && <Button onClick={() => setShowForm(true)}> Add more</Button>}
            {userExercises.length > 0 && <Button sx={{marginTop: '24px'}} onClick={setUser} size="large" variant="contained">Done - Set Up My Account</Button>}
        </Container>
    </main>
  );
}

export default OnBoarding;
