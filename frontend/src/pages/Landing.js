import { useEffect, useState } from "react"
import WorkoutCard from '../components/WorkoutCard'
import WorkoutForm from "../components/WorkoutForm"

const Landing = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const getWorkouts = async () => {
            const data = await fetch('http://localhost:8000/api/workouts/')
            const dataJson = await data.json()
        
            if(data.ok) {
                setWorkouts(dataJson)
            }
        }

        getWorkouts()
    }, [])

    return (
        <div className="landingPage">
            <div className="workouts">
                { workouts && workouts.map(workout => (
                     <WorkoutCard key={workout._id} workout = {workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Landing