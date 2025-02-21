import { useState } from 'react'
import TaskList from '../components/TaskList'

export default function Dashboard() {
    const [tasks, setTasks] = useState([])

    return (
        <div>
            <h1>Dashboard</h1>
            <TaskList tasks={tasks} />
        </div>
    )
}
