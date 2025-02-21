import TaskItem from './TaskItem'

interface TaskListProps {
    tasks: { id: number; title: string; description: string }[]
}

export default function TaskList({ tasks }: TaskListProps) {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    )
}
