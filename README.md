# 📝 Think Board - MERN Notes Application

A full-stack Notes Management application built using the **MERN Stack** with secure **JWT Authentication**. Users can register, log in, and manage their personal notes with complete CRUD functionality.

🔗 **Live Demo:** https://think-board-mern-livid.vercel.app

---

## 📸 Preview

> Add screenshots or GIFs of your application here.

| Home Page | Login |
|-----------|-------|
| ![Home](./screenshots/home.png) | ![Login](./screenshots/login.png) |

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 🔒 Password Encryption using bcrypt
- 👤 User Registration & Login
- 📝 Create Notes
- 📖 Read Notes
- ✏️ Update Notes
- 🗑️ Delete Notes
- 🔍 Responsive UI
- ☁️ MongoDB Atlas Database
- 🌐 RESTful APIs
- 🚀 Deployed on Vercel & Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- CORS
- dotenv

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📂 Project Structure

```
Think-Board-MERN/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/think-board-mern.git
cd think-board-mern
```

---

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside **Backend**.

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Run Backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd Frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5001/api
```

Run Frontend

```bash
npm run dev
```

---

## 🔑 Environment Variables

### Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
NODE_ENV=
```

### Frontend

```env
VITE_API_URL=
```

---

## 🌐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

### Notes

| Method | Endpoint |
|---------|----------|
| GET | `/api/notes` |
| POST | `/api/notes` |
| PUT | `/api/notes/:id` |
| DELETE | `/api/notes/:id` |

---

## 🔒 Authentication

The application uses **JWT Authentication**.

After login, the JWT token is stored in local storage and automatically attached to every protected API request using Axios Interceptors.

---

## 📌 Future Enhancements

- ⭐ Pin Notes
- 🔍 Search Notes
- 🏷️ Tags & Categories
- 🌙 Dark/Light Mode
- 📅 Sort Notes
- 📤 Export Notes
- 📎 File Attachments
- 👥 Share Notes
- 📱 Progressive Web App (PWA)

---

## 📈 Learning Outcomes

This project helped me understand:

- REST API Development
- JWT Authentication
- Password Hashing
- Protected Routes
- React Context API
- Axios Interceptors
- MongoDB & Mongoose
- MERN Stack Architecture
- Deployment with Render & Vercel

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Pranav**

If you found this project helpful, consider giving it a ⭐ on GitHub!
