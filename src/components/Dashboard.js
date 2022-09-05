import {useState, useEffect} from 'react'
import {exerciseDataList} from '../constants';
import ExerciseProgress from './ExerciseProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


function Dashboard({userData, handleUser}) {
    const [loading, setLoading] = useState(true)
    const [exerciseData, setExerciseData] = useState([])

    const calculatePercentage = (a,b) => {
        if (a > b) {
            return 100;
        }
        return Math.round((a/b) * 100);
    }

    // Todo: implement filtering by interval (consider rename to avoid collision with setInterval)
    const [timeFilter, setTimeFilter] = useState('day')

    const fetchRandom = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            if (json.length > 0){
                const results = combineDatawithGoals(userData, json)
                setExerciseData(results)
                setLoading(false)
            }
            } catch (error) {
            console.log("error", error);
            }
        }
    
    const combineDatawithGoals = (userData, randomData) => {
        return userData.map((item, index) => { return {...item, progress: randomData[index]}})
    }

    useEffect(() => {
        fetchRandom(`http://www.randomnumberapi.com/api/v1.0/random?min=1&max=20&count=${userData.length}`)
    }, []);

    const handleClick = e => {
        setTimeFilter(e.target.value)
    }
    
    const exerciseList = exerciseData.filter(item => item.interval === timeFilter).map((item, index) => {
        const progressPercent = calculatePercentage(item.progress, item.minutes);
     return (
        <ExerciseProgress exercise={item.exercise} key={index} bgcolor={exerciseDataList[item.exercise].color} progress={progressPercent} />
      )
    })
    
  return (
    <main>
        <h1>Dashboard view</h1>
        {loading && (<p>Loading</p>)}
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button value="day" onClick={handleClick}>Day</Button>
            <Button value="week" onClick={handleClick}>Week</Button>
            <Button value="month" onClick={handleClick}>Month</Button>
            <Button value="year" onClick={handleClick}>Year</Button>
        </ButtonGroup>
        <Box sx={{
            margin: '2rem'
        }}>
        {!loading &&(exerciseList)}
        {exerciseList.length < 1 && (
            <div>You did not add any exercises for this time period</div>
        )}
        </Box>
        <Button onClick={() => {window.localStorage.removeItem('user'); handleUser(null)}}>Start Over</Button>
    </main>
  );
}

export default Dashboard;
