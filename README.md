# Portfolio Website

A modern, full-stack portfolio website showcasing projects, skills, and blog posts with an integrated AI chatbot feature. Built with React, TypeScript, and Node.js.

## 🚀 Features

### Frontend
- **Responsive Design**: Modern, mobile-first UI built with Tailwind CSS
- **Animations**: Smooth animations using Framer Motion
- **Dynamic Routing**: Multi-page navigation with React Router
- **Project Showcase**: Detailed project pages with images and descriptions
- **Blog System**: Markdown-based blog posts with syntax highlighting
- **Contact Form**: Functional contact form with backend integration
- **AI Chatbot**: Interactive chatbot powered by Google Gemini AI
- **Code Highlighting**: Syntax highlighting for code snippets in blog posts
- **Resume Download**: PDF resume available for download

### Backend
- **RESTful API**: Express.js backend with structured routes
- **Database Integration**: MongoDB for storing contact form submissions
- **AI Integration**: Google Gemini API integration for chatbot functionality
- **Security**: Helmet.js, CORS, and rate limiting for enhanced security
- **Error Handling**: Comprehensive error handling and logging
- **Environment Configuration**: Secure environment variable management

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Query** - Server state management
- **React Hook Form** - Form handling
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Google Gemini AI** - AI chatbot integration
- **Nodemailer** - Email functionality (if configured)
- **Helmet** - Security middleware
- **Express Rate Limit** - Rate limiting
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
New portfolio/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable components (Layout, ChatBot)
│   │   ├── pages/           # Page components (Home, Projects, About, etc.)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API service functions
│   │   ├── utils/           # Utility functions
│   │   └── assets/          # Static assets
│   ├── public/              # Public assets (images, PDFs, favicons)
│   └── package.json
│
├── backend/                 # Express backend API
│   ├── controllers/         # Route controllers
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions (Gemini AI)
│   └── server.js            # Entry point
│
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **Google Gemini API Key** (for chatbot feature)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "New portfolio"
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   NODE_ENV=development
   ```

   Create a `.env` file in the `frontend` directory (if needed):
   ```env
   VITE_API_URL=http://localhost:5001/api
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5001`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio website

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🌐 Deployment

### Frontend
The frontend can be deployed to:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- Any static hosting service

Build the frontend first:
```bash
cd frontend
npm run build
```
The `dist` folder will contain the production build.

### Backend
The backend can be deployed to:
- **Render**
- **Heroku**
- **Railway**
- **AWS EC2**
- **DigitalOcean**

Make sure to set all environment variables in your hosting platform.

## 🔒 Environment Variables

### Backend (.env)
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/portfolio
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_API_URL=https://your-api-url.com/api
```

## 📄 API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Submit contact form
- `POST /api/ai/chat` - AI chatbot endpoint

## 🎨 Customization

### Updating Personal Information
- Edit `src/pages/Home.tsx` for hero section content
- Edit `src/pages/About.tsx` for about page content
- Update project data in `src/pages/Projects.tsx`

### Changing Theme Colors
- Modify `tailwind.config.js` to customize color scheme
- Update CSS variables in `src/index.css`

### Adding New Projects
- Add project data to the projects array in `src/pages/Projects.tsx`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**MacAnthony Arinze Eze**

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Google Gemini](https://ai.google.dev/) for AI capabilities

---

⭐ If you like this project, please consider giving it a star!

