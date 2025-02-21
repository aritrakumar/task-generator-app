import TaskForm from '../components/TaskForm'

export default function Home() {
    const generateTasks = async (topic: string) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/tasks/generate`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic }),
            }
        )
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <h1>Task Generator</h1>
            <TaskForm onGenerate={generateTasks} />
        </div>
    )
}
