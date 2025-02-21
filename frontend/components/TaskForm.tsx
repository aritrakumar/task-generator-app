import { useState } from 'react'

interface TaskFormProps {
    onGenerate: (topic: string) => void
}

export default function TaskForm({ onGenerate }: TaskFormProps) {
    const [topic, setTopic] = useState('')

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Topic"
                value={topic}
                onChange={e => setTopic(e.target.value)}
            />
            <button onClick={() => onGenerate(topic)}>Generate Tasks</button>
        </div>
    )
}
