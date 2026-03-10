# Quick Start Guide

## 🚀 Getting Started

### 1. Start the Backend Server

```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:5000`

### 2. Start the Frontend (in a new terminal)

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

## 📝 Configuration

### Backend Configuration

Create `backend/.env` file:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** Email configuration is optional. The contact form will work without it, but won't send emails.

### Frontend Configuration

Create `frontend/.env` file (optional):
```
VITE_API_URL=http://localhost:5000/api
```

## 🎯 What's Included

### React Components
- ✅ Navbar (with dark mode toggle)
- ✅ Hero Section (with typing animation)
- ✅ Photo Section (animated)
- ✅ Skills Section
- ✅ Contact Form (connected to backend)

### Backend API
- ✅ Health check endpoint
- ✅ Portfolio data endpoint
- ✅ Contact form submission endpoint

## 📁 Project Structure

```
portfolio/
├── frontend/          # React app (port 3000)
│   └── src/
│       ├── components/
│       ├── services/
│       └── App.jsx
├── backend/           # Express server (port 5000)
│   └── server.js
└── images/           # Your photos go here
```

## 🔧 Next Steps

1. Add your profile photo to `frontend/public/images/profile-photo.jpg`
2. Customize components in `frontend/src/components/`
3. Update API endpoints in `backend/server.js`
4. Configure email in `backend/.env` (optional)

## 🐛 Troubleshooting

- **Port already in use**: Change PORT in backend/.env
- **CORS errors**: Check backend CORS configuration
- **API not connecting**: Verify VITE_API_URL in frontend/.env


