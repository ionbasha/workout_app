import { useState } from 'react'

const WorkoutForm = () => {

    const [name, setName] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [workouts, setWorkouts] = useState(null)

    const getWorkouts = async () => {
        const data = await fetch('http://localhost:8000/api/workouts/')
        const dataJson = await data.json()
    
        if(data.ok) {
            setWorkouts(dataJson)
        }
    }

    const handleSubmit = async e => {

        const workout = {name, sets, reps}

        const res = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const resJson = await res.json()

        if(!res.ok) {
            console.log("Error")
        }

        else {
            setName('')
            setReps('')
            setSets('')
            console.log("New workout added")
        }

    }

    return(
        <form className='create' onSubmit={handleSubmit}>
            <h2>Add a new workout</h2>

            <label>Exercise Name:</label>
            <input type={'text'} onChange={e => setName(e.target.value)} value={name}></input>

            <label>Sets:</label>
            <input type={'number'} onChange={e => setSets(e.target.value)} value={sets}></input>

            <label>Reps:</label>
            <input type={'number'} onChange={e => setReps(e.target.value)} value={reps}></input>

            <button>Add new workout</button>
        </form>
    )
}

export default WorkoutForm