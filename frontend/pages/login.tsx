import { auth } from '../firebaseClient'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export default function Login() {
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    )
}
