import { exerciseDataList } from "../constants";

const ExerciseProgress = (props) => {
    const { bgcolor, exercise, progress } = props; // Demonstrating object destructuring method of obtaining progs

    const exerciseName = exerciseDataList[exercise].formattedName ? exerciseDataList[exercise].formattedName : exercise

    const exerciseStyles = {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '500px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    }

    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const barStyles = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
        <div style={exerciseStyles}>
            {exerciseName.toUpperCase()}
            <div style={containerStyles}>
                <div style={barStyles}>
                <span style={labelStyles}>{`${progress}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ExerciseProgress;