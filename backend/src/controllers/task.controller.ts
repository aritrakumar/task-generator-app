import { Request, Response } from 'express'
import {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} from '../services/googleGemini.service'

export const generateTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await createTask(req.body.topic)
        res.status(201).json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
