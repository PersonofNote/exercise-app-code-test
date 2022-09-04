import {useState, useEffect} from 'react'
import * as icons from '@mui/icons-material'
import {exerciseDataList} from '../constants';
import ExerciseProgress from './ExerciseProgress';


function Dashboard({userData}) {
    console.log(userData)
    const [loading, setLoading] = useState(true)
    const [randomData, setRandomData] = useState([])
    const [exerciseData, setExerciseData] = useState([])

    const calculatePercentage = (a,b) => {
        if (a > b) {
            return 100;
        }
        return Math.round((a/b) * 100);
    }

    // Todo: calculate day/week/month/year based off of user input and set based on this
    const [timeFilter, setTimeFilter] = useState('week')

    const fetchRandom = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setRandomData(json)
            const results = combineDatawithGoals(userData, randomData)
            setExerciseData(results)
            setLoading(false)
            } catch (error) {
            console.log("error", error);
            }
        }
    
    const combineDatawithGoals = (userData, randomData) => {
        return userData.map((item, index) => ({...item, progress: randomData[index]}))
    }

    useEffect(() => {
        fetchRandom('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=5')
      }, []);
    
    const exerciseList = exerciseData.map((item, index) => {
        const progressPercent = calculatePercentage(item.progress, item.minutes);
     return (
        <ExerciseProgress exercise={item.exercise} key={index} color={exerciseDataList[item]} progress={progressPercent} />
      )
    })
    
  return (
    <main>
        <h1>Dashboard view</h1>
        {loading && (<p>Loading</p>)}
        {!loading &&(exerciseList)}

    </main>
  );
}

export default Dashboard;
