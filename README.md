# 🌱 GreenGo - Crop Helper Platform

<div align="center">

![GreenGo Logo](src/images/logo.png)

**Smart Agricultural Solutions for Modern Farmers**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.2.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[🚀 Live Demo](#) | [📖 Documentation](#features) | [🐛 Report Bug](https://github.com/tejassapara61-stack/green-GO/issues) | [✨ Request Feature](https://github.com/tejassapara61-stack/green-GO/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Core Modules](#-core-modules)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🌾 Overview

**GreenGo** is a comprehensive agricultural platform designed to empower farmers with cutting-edge technology and data-driven insights. From crop planning and disease detection to real-time weather monitoring and government scheme awareness, GreenGo provides end-to-end solutions for modern agriculture.

### 🎯 Mission

To bridge the gap between traditional farming practices and modern technology, enabling farmers to make informed decisions, maximize yields, and achieve sustainable agricultural growth.

### ✨ Key Highlights

- 🤖 **AI-Powered Disease Detection** - Early identification of crop diseases
- 📊 **Smart Crop Planning** - Data-driven planting recommendations
- 🌦️ **Real-Time Weather Insights** - Hyperlocal weather forecasting
- 📜 **Government Schemes Hub** - Easy access to agricultural subsidies
- 🌍 **Multi-Language Support** - Accessible to farmers nationwide
- 📱 **Responsive Design** - Works seamlessly across all devices

---

## 🚀 Features

### 1. 🧠 Smart Crop Planner
- **Intelligent Recommendations** - AI-driven suggestions based on:
  - Soil type and quality
  - Regional climate patterns
  - Market demand trends
  - Historical yield data
- **Seasonal Planning** - Optimize planting schedules
- **Crop Rotation Advisor** - Maintain soil health
- **Yield Predictions** - Forecast expected harvest

### 2. 🔬 Disease Detection System
- **Image-Based Analysis** - Upload crop photos for instant diagnosis
- **ML-Powered Recognition** - Detect diseases with high accuracy
- **Treatment Recommendations** - Get actionable remediation steps
- **Disease Database** - Comprehensive catalog of crop ailments
- **Prevention Tips** - Proactive crop health management

### 3. ☁️ Weather Monitoring
- **Real-Time Updates** - Current weather conditions
- **7-Day Forecasts** - Plan ahead with confidence
- **Rainfall Predictions** - Critical for irrigation planning
- **Temperature Trends** - Optimize crop care activities
- **Weather Alerts** - Get notified of extreme conditions

### 4. 🌾 Crop Information Portal
- **Crop Encyclopedia** - Detailed cultivation guides
- **Best Practices** - Expert farming techniques
- **Nutrient Requirements** - Fertilization guidance
- **Growth Stages** - Monitor crop development
- **Market Prices** - Stay informed on crop values

### 5. 📋 Government Schemes
- **Centralized Hub** - All agricultural schemes in one place
- **Eligibility Checker** - Find schemes you qualify for
- **Application Guidance** - Step-by-step application process
- **Document Checklists** - Required paperwork guidance
- **Deadline Tracking** - Never miss an opportunity

### 6. 🔐 User Authentication
- **Secure Firebase Auth** - Industry-standard security
- **Profile Management** - Personalized user experience
- **Data Privacy** - Your information stays protected
- **Session Management** - Secure and persistent logins

### 7. 🌐 Internationalization
- **Multi-Language Support** - React i18next integration
- **Regional Customization** - Localized content
- **Easy Language Switching** - One-click translation
- **Inclusive Design** - Accessible to all farmers

---

## 🛠️ Tech Stack

### Frontend
- **⚛️ React 19.1.1** - Modern UI library with latest features
- **⚡ Vite 7.1.2** - Lightning-fast build tool and dev server
- **🎨 Tailwind CSS 4.1.13** - Utility-first CSS framework
- **🧭 React Router DOM 7.9.1** - Client-side routing
- **🎭 Lucide React** - Beautiful, consistent icons
- **🔔 React Toastify** - Elegant notifications

### Backend & Services
- **🔥 Firebase 12.2.1** - Backend-as-a-Service
  - Authentication
  - Firestore Database
  - Cloud Storage
  - Hosting
- **📡 Axios** - HTTP client for API requests

### Development Tools
- **📦 npm** - Package management
- **🔍 ESLint** - Code quality and consistency
- **🎯 Vite Plugin React** - Fast refresh and optimizations

---

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Git**
- **Firebase Account** (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tejassapara61-stack/green-GO.git
   cd green-GO/GreenGo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore Database
   - Copy your Firebase config

4. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   cp .env.example .env
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here

# API Endpoints (Optional)
VITE_WEATHER_API_KEY=your_weather_api_key_here
VITE_ML_API_ENDPOINT=your_ml_api_endpoint_here
```

> ⚠️ **Important**: Never commit your `.env` file to version control!

---

## 💡 Usage

### For Farmers

1. **Sign Up / Login**
   - Create an account using email and password
   - Verify your email address

2. **Explore Dashboard**
   - Access personalized recommendations
   - View your saved crops and plans

3. **Plan Your Crops**
   - Navigate to Smart Planner
   - Input your land details
   - Get AI-powered recommendations

4. **Check Weather**
   - View real-time weather data
   - Plan irrigation and harvesting

5. **Detect Diseases**
   - Upload photos of affected crops
   - Receive instant diagnosis
   - Follow treatment recommendations

6. **Browse Schemes**
   - Find eligible government programs
   - Learn application procedures
   - Track deadlines

### For Developers

```bash
# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📁 Project Structure

```
green-GO/
├── GreenGo/
│   ├── public/                 # Static assets
│   │   ├── crops.jpg
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/            # Images, fonts, etc.
│   │   │   └── react.svg
│   │   ├── components/        # Reusable UI components
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── CoreValues.jsx
│   │   │   ├── DashboardPreview.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar2.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── Crops.jsx
│   │   │   ├── DiseaseDetector.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Schemes.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── SmartPlanner.jsx
│   │   │   └── Weather.jsx
│   │   ├── images/            # Image assets
│   │   │   ├── dashboard.jpg
│   │   │   ├── logo.jpg
│   │   │   └── logo.png
│   │   ├── App.jsx            # Main application component
│   │   ├── App.css            # Global styles
│   │   ├── main.jsx           # Application entry point
│   │   ├── index.css          # Base CSS
│   │   ├── firebase.js        # Firebase configuration
│   │   └── GoogleTranslate.jsx # Translation component
│   ├── .gitignore             # Git ignore rules
│   ├── eslint.config.js       # ESLint configuration
│   ├── index.html             # HTML entry point
│   ├── package.json           # Dependencies and scripts
│   ├── package-lock.json      # Locked dependencies
│   ├── README.md              # Project documentation
│   └── vite.config.js         # Vite configuration
```

---

## 🧩 Core Modules

### Authentication Module (`firebase.js`)
```javascript
// Firebase initialization and auth configuration
// Handles user authentication, session management
```

### Routing System (`App.jsx`)
```javascript
// Protected routes
// Public routes
// Authentication context
// Role-based access control
```

### State Management
```javascript
// React Context API for global state
// Local state for component-specific data
// Firebase real-time listeners
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/green-GO.git
   cd green-GO/GreenGo
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

5. **Commit your changes**
   ```bash
   git commit -m 'feat: Add AmazingFeature'
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Provide a clear description
   - Reference any related issues

### Contribution Guidelines

- 📝 Follow the code style and conventions
- ✅ Ensure all tests pass
- 📚 Update documentation as needed
- 🐛 Write clear commit messages
- 🤝 Be respectful and collaborative

### Code of Conduct

- Be respectful and inclusive
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Tejas Sapara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 Contact

### Project Lead
**Tejas Sapara**

- 💼 GitHub: [@tejassapara61-stack](https://github.com/tejassapara61-stack)
- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 🔗 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

### Project Links
- 🌐 **Repository**: [https://github.com/tejassapara61-stack/green-GO](https://github.com/tejassapara61-stack/green-GO)
- 🐛 **Issue Tracker**: [GitHub Issues](https://github.com/tejassapara61-stack/green-GO/issues)
- 📖 **Wiki**: [Project Wiki](https://github.com/tejassapara61-stack/green-GO/wiki)

---

## 🙏 Acknowledgments

Special thanks to:

- 🌾 **Farmers** - For inspiring this project
- 🎓 **Agricultural Experts** - For domain knowledge
- 💻 **Open Source Community** - For amazing tools and libraries
- 🔥 **Firebase Team** - For robust backend services
- ⚛️ **React Team** - For an incredible framework
- 🎨 **Tailwind CSS** - For beautiful styling utilities
- 🚀 **Vite Team** - For blazing fast development

### Built With ❤️ for Farmers

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tejassapara61-stack/green-GO&type=Date)](https://star-history.com/#tejassapara61-stack/green-GO&Date)

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/tejassapara61-stack/green-GO?style=flat-square)
![GitHub code size](https://img.shields.io/github/languages/code-size/tejassapara61-stack/green-GO?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/tejassapara61-stack/green-GO?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/tejassapara61-stack/green-GO?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/tejassapara61-stack/green-GO?style=flat-square)

---

<div align="center">

### ⭐ If you find this project useful, please give it a star! ⭐

**Made with 💚 by the GreenGo Team**

[Back to Top ⬆️](#-greengo---crop-helper-platform)

</div>
# green-GO
# green-GO
