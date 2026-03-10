# Portfolio Website - React + Backend

A modern, professional portfolio website built with React frontend and Node.js/Express backend.

## Features

- ⚛️ **React Frontend** - Modern, component-based UI
- 🚀 **Express Backend** - RESTful API server
- 🎨 **Dark/Light Mode** - Theme toggle functionality
- 📱 **Fully Responsive** - Works on all devices
- 📧 **Contact Form** - Connected to backend API
- 🎭 **Smooth Animations** - Scroll-triggered animations
- 🖼️ **Photo Section** - Unique animated photo display

## Project Structure

```
portfolio/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── services/     # API services
│   │   └── App.jsx       # Main app component
│   └── public/
│       └── images/       # Static images
├── backend/           # Express server
│   ├── server.js      # Main server file
│   └── package.json
└── images/            # Original images (for reference)
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. Start the server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (optional, defaults to localhost:5000):
```bash
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### GET `/api/health`
Health check endpoint

### GET `/api/portfolio`
Get portfolio data (personal info, skills, etc.)

### POST `/api/contact`
Submit contact form
- Body: `{ name, email, message }`
- Returns: `{ success: boolean, message: string }`

## Adding Your Photo

1. Place your profile photo in `frontend/public/images/`
2. Name it `profile-photo.jpg`
3. The app will automatically use it

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `EMAIL_USER` - Your email for contact form
- `EMAIL_PASS` - Your email app password

### Frontend (.env)
- `VITE_API_URL` - Backend API URL (default: http://localhost:5000/api)

## Development

- Frontend: `cd frontend && npm run dev`
- Backend: `cd backend && npm run dev`

## Production Build

### Frontend
```bash
cd frontend
npm run build
```
Output will be in `frontend/dist/`

### Backend
```bash
cd backend
npm start
```

## Technologies Used

- **Frontend**: React, Vite, Axios
- **Backend**: Node.js, Express, Nodemailer
- **Styling**: CSS3 with CSS Variables
- **Icons**: Font Awesome

## Notes

- The contact form email functionality requires email configuration in `.env`
- For production, update API URLs in frontend `.env`
- Make sure CORS is properly configured for your domain


