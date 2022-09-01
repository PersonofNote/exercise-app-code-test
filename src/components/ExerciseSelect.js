import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField, { TextFieldProps } from '@mui/material/TextField';

function ExerciseSelect({addExercise}) {
    const [state, setState] = useState({
        exercise: "",
        minutes: 0,
        interval: ""
      })
    
    const handleChange = e => {
        console.log(e.target.name)
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
        console.log("STATE")
        console.log(state)
    };
    return(

<Box sx={{ minWidth: 120 }}>
I would like to 
<FormControl>
    <InputLabel id="exercise-select-label">(Select exercise)</InputLabel>
    <Select
    name="exercise"
    labelId="exercise-select-label"
    id="exercise-select"
    value={state.exercise}
    label="Exercise"
    onChange={handleChange}
    >
    <MenuItem value={'liftWeights'}>Lift Weights</MenuItem>
    <MenuItem value={'jog'}>Jog</MenuItem>
    <MenuItem value={'swim'}>Swim</MenuItem>
    </Select>
</FormControl>
for 
<TextField value={state.minutes} onChange={handleChange} name="minutes" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
minutes every
<InputLabel id="interval-select-label">(Select exercise)</InputLabel>
    <Select
        name="interval"
        labelId="interval-select-label"
        id="interval-select"
        value={state.interval}
        label="interval"
        onChange={handleChange}
    >
    <MenuItem value={'day'}>Day</MenuItem>
    <MenuItem value={'week'}>Week</MenuItem>
    <MenuItem value={'month'}>Month</MenuItem>
    <MenuItem value={'year'}>Year</MenuItem>
    </Select>
    <Button onClick={() => addExercise(state)}>Add</Button>
</Box>
    )
}


export default ExerciseSelect;