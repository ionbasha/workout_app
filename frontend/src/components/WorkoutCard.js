
const WorkoutCard = ({workout}) => {

    const handleClick = async () => {
        const res = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })

        const resJson = res.json()

        if(res.ok) { 
            console.log(`Deleted successfully`)
            alert("Deleted workout.")
            window.location.reload(true)
        }
    }

    return (
        <div className='workout-details'>
            <h2>{workout.name}</h2>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>    
            <button onClick={handleClick}>Remove</button>
        </div>
    )
}

export default WorkoutCard;