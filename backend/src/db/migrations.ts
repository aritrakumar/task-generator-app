import { db } from './drizzle.config'
import { tasks } from '../models/task.model'

async function migrate() {
    await db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            completed BOOLEAN DEFAULT false NOT NULL,
            created_at TIMESTAMP DEFAULT NOW() NOT NULL
        );
    `)
    console.log('Database migrated successfully!')
}

migrate().catch(console.error)
