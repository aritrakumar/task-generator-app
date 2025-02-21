interface TaskItemProps {
    task: { id: number; title: string; description: string }
}

export default function TaskItem({ task }: TaskItemProps) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button>Mark Complete</button>
        </div>
    )
}
