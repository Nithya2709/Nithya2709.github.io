# Portfolio Website - HTML/CSS/JS + Backend

A professional portfolio website with HTML/CSS/JavaScript frontend connected to a Node.js/Express backend.

## Features

- 🎨 **Pure HTML/CSS/JS** - No framework dependencies
- 🚀 **Express Backend** - RESTful API server
- 🎭 **Dark/Light Mode** - Theme toggle functionality
- 📱 **Fully Responsive** - Works on all devices
- 📧 **Contact Form** - Connected to backend API
- 🎬 **Smooth Animations** - Scroll-triggered animations

## Quick Start

### 1. Start the Backend Server

```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:5000`

### 2. Open the Frontend

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript (connected to backend)
├── images/             # Your photos
│   └── profile-photo.jpg
└── backend/           # Express server
    ├── server.js      # Main server file
    └── package.json
```

## Backend Configuration

Create `backend/.env` file:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** Email configuration is optional. The contact form will work without it.

## API Endpoints

### GET `/api/health`
Health check endpoint

### GET `/api/portfolio`
Get portfolio data

### POST `/api/contact`
Submit contact form
- Body: `{ name, email, message }`
- Returns: `{ success: boolean, message: string }`

## Adding Your Photo

1. Place your profile photo in `images/` folder
2. Name it `profile-photo.jpg`
3. Update the image path in `index.html` if needed

## Contact Form

The contact form is now connected to the backend API. When users submit the form:
1. Data is sent to `http://localhost:5000/api/contact`
2. Backend processes and can send email (if configured)
3. User sees success/error message

## Development

- **Backend**: `cd backend && npm start` (or `npm run dev` for auto-reload)
- **Frontend**: Open `index.html` directly or use a local server

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express
- **Styling**: CSS3 with CSS Variables
- **Icons**: Font Awesome

## Notes

- Make sure the backend is running before testing the contact form
- For production, update `API_BASE_URL` in `script.js`
- CORS is enabled for localhost development


