# 🚀 Team Task Manager

A modern Full-Stack Team Task Management Dashboard built using React, Node.js, Express, MongoDB, and JWT Authentication.

This application allows teams to manage projects, tasks, AI evaluation workflows, productivity tracking, and task analytics with a clean interactive UI.

---

# 🌟 Features

## 🔐 Authentication
- User Signup/Login
- JWT Authentication
- Protected Routes
- Role-based Access (Admin / Member)

---

# 📊 Dashboard Features

## ✅ Task Analytics
- Total Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks

## 🔄 Interactive Cards
Clicking dashboard cards dynamically swaps task details inside the cards.

## ⏱ AHT (Average Handling Time) Tracker
- Start Timer
- Stop Timer
- Reset Timer

## 📈 Productivity Tracker
- Daily Goal Tracking
- Remaining Hours
- Progress Bar

---

# 🤖 AI Evaluation Workflow

Users can:
- Add Task ID
- Enter Prompt
- Add Response A Source
- Add Response B Source
- Select Better Response
- Add Ratings ⭐
- Choose:
  - With Justification
  - Without Justification

Conditional rendering automatically hides the justification section when not required.

---

# 📝 Evaluation History
All submitted evaluations are displayed in a dynamic history table including:
- Task ID
- Evaluation Type
- Better Response
- AHT Time

---

# ➕ Dynamic Task Management
Users can:
- Add New Tasks
- Select Task Status
  - Completed
  - Pending
  - Overdue

Dashboard statistics automatically update based on tasks.

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS Inline Styling

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

---

# 📂 Project Structure

team-task-manager/

├── client/

│   ├── src/

│   ├── pages/

│   ├── components/

│   └── App.jsx

│

├── server/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── server.js

│   └── .env

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <your-github-repo-link>