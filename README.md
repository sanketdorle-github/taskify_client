# Taskify Client (Frontend)

This is the **frontend** for the Taskify application, built using **React**, **Vite**, **TailwindCSS**, and component libraries for UI.

It connects to an Express.js backend for task and user management.

---

## 🚀 Features

- User authentication (register/login)
- Create, update, delete tasks
- Toggle task completion
- Search, filter, and paginate tasks
- Protected routes with JWT authentication

---

## 📦 Requirements

- Node.js (v16+ recommended)
- The backend server running at `http://localhost:5000` (or your custom URL)

---

## 🔧 Installation

1. **Clone the repository:**


git clone https://github.com/your-username/taskify_client.git
cd taskify_client
Install dependencies:


npm install
Configure API base URL (if needed):

Check the src/api.js file and set the API base URL:


const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});
Update this if your backend is hosted elsewhere.

Run the app:

bash

npm run dev
This will start the Vite development server, usually at http://localhost:5173.

📁 Folder Structure
arduino
Copy
Edit
taskify_client/
├── public/
├── src/
│   ├── api.js
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Layout/
│   │   ├── Tasks/
│   │   └── ui/
│   ├── pages/
│   ├── utils/
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
🔐 Auth Flow
JWT token is stored in localStorage.

Protected routes are implemented using PrivateRoute.jsx.

Axios includes the token in the Authorization header automatically.

🧑‍💻 Author
Developed by Sanket Dorle

----
