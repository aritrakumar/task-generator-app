# Task Generator App

A full-stack application for generating and managing tasks via the Google Gemini API.

## 🚀 Features
- User authentication via Firebase
- Task generation using Google Gemini API
- Full CRUD operations for task management
- PostgreSQL database using Drizzle ORM

---

## 🏗 Tech Stack
- **Backend:** Express.js, PostgreSQL, Drizzle ORM, Docker
- **Frontend:** Next.js (React), Tailwind CSS, Firebase Authentication

---

## 🛠️ Setup & Installation

### 📌 Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- [Firebase Account](https://firebase.google.com/) (for authentication setup)

### 📂 Step 1: Clone the Repository
```sh
git clone https://github.com/your-username/task-generator-app.git
cd task-generator-app
```

### 📂 Step 2: Backend Setup
```sh
cd backend
npm install
```

#### 2.1 Configure Environment Variables
Create a `.env` file inside the `backend/` directory:
```ini
PORT=5000
DATABASE_URL=postgresql://your_username:your_password@localhost:5432/tasks_db
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
```

#### 2.2 Run PostgreSQL Database with Docker
```sh
docker-compose up -d
```

#### 2.3 Start the Backend Server
```sh
npm run dev
```
The backend server should now be running at `http://localhost:5000`.

---

### 📂 Step 3: Frontend Setup
```sh
cd frontend
npm install
```

#### 3.1 Configure Environment Variables
Create a `.env.local` file inside the `frontend/` directory:
```ini
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

#### 3.2 Start the Frontend Server
```sh
npm run dev
```
The frontend should now be available at `http://localhost:3000`.

---

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes.

---

## 🛠️ Issues & Support
If you encounter any issues or have suggestions, please open an issue on GitHub.

---

## 📜 License
This project is licensed under [MIT](LICENSE).

