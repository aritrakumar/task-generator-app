import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

export async function createTask(topic: string) {
    const response = await axios.post(
        'https://api.google.com/gemini',
        { prompt: topic },
        {
            headers: {
                Authorization: `Bearer ${process.env.GOOGLE_GEMINI_API_KEY}`,
            },
        }
    )
    return response.data
}
