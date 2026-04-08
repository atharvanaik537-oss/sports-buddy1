# 🏆 Sports Buddy | Cross-Platform Mobile Application

**Sports Buddy** is a specialized social platform designed to connect sports enthusiasts, developed during my Full Stack Web Development internship at **Unified Mentor**.

---

## 🚀 Overview
**Sports Buddy** is a cross-platform solution designed to bridge the gap between sports enthusiasts and local playing opportunities. Originally built as a responsive web application, it was successfully transitioned into a **Native Android Experience** using Capacitor JS. 

The application features a secure, **Role-Based Access Control (RBAC)** system that provides distinct environments for regular users to host events and for administrators to manage platform data in real-time. By utilizing **Firebase** for backend services, the app ensures that every match, category, and city update is synchronized instantly across all devices. 

### ✨ Key Features
* **Role-Based Access Control (RBAC):** Distinct dashboards for Users and Admins.
* **Real-Time Synchronization:** Powered by Firebase Firestore.
* **Mobile-First UI:** Optimized CSS for a seamless "Fit-to-Screen" experience on Android.
* **Native Android Integration:** Built using Capacitor JS to generate a functional APK.
* **Splash Screen:** Professional opening screen with pulse animation.

---

## 📁 Project Structure

```text
SPORTS-BUDDY1/
├── .firebase/             # Firebase hosting cache and local configuration
├── android/               # Native Android Studio project (Capacitor generated)
├── www/                   # Web application root directory
│   ├── assets/            # Global styling and media
│   │   ├── css/           # admin.css, style.css
│   │   └── images/        # App icons and background images
│   ├── src/               # Application logic (Core Scripts)
│   │   ├── admin-core.js  # Dashboard management logic
│   │   ├── auth.js        # Authentication & Role-based routing
│   │   ├── firebase-config.js # Database & Auth initialization
│   │   ├── logger.js      # Action tracking and logs
│   │   ├── user-core.js   # User-specific event logic
│   │   └── utils.js       # Helper functions
│   ├── index.html         # Application Entry (Login)
│   ├── register.html      # User Registration
│   ├── admin-login.html   # Admin Entry Point
│   ├── admin-dashboard.html # Admin Control Panel
│   └── user-dashboard.html  # Main User Interface
├── .gitignore             # Files excluded from GitHub (node_modules, etc.)
├── capacitor.config.json  # Bridge configuration for Mobile
├── firebase.json          # Firebase rules and deployment settings
└── package.json           # Node dependencies and scripts

```
---

## ⚙️ Installation & Setup

Follow these steps to set up the project locally and sync it with your Android development environment.

### 1. Prerequisites
* **Node.js** (v16 or higher recommended)
* **Android Studio** (to build and run the APK)
* **Firebase Account** with a project created in the Firebase Console

### 2. Clone and Initialize:

Open your terminal and run the following:
```bash
# Clone the repository
git clone https://github.com/Atharva-Naik/sports-buddy.git

# Navigate into the project directory
cd SPORTS-BUDDY1

# Install project dependencies
npm install

```

### 3. Firebase Configuration:
Before running the app, ensure your www/src/firebase-config.js file is correctly set up with your project keys from the Firebase Console.

```bash

4. Syncing to Android (Capacitor):
#Since this is a hybrid app, you need to "copy" your web code into the Android folder every time you make changes to the HTML/JS:
# Sync web assets to the native Android project:
npx cap copy android

# Open the project directly in Android Studio:
npx cap open android
```

### Running the App:
Web: You can open index.html using a "Live Server" extension in VS Code.

Mobile: In Android Studio, click the 'Run' button (green play icon) to launch the app on your emulator or physical device.

---

## 📝 Note to Evaluator
The APK was generated using **Capacitor JS**. All core logic for authentication and event management resides in the `www/src/` directory.

--- 

## 👨‍💻 Developer
* **Name:** Atharva Naik
* **UNID:** UMID03122572866
* **Company:** Unified Mentor
* **Role:** Full Stack Development Intern
