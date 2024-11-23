# Netflix Clone

![Netflix Logo](https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg)

## Project Overview

Netflix Clone is a web application that replicates the core features of the Netflix platform, including user authentication, video streaming, and dynamic content rendering. Built using **React**, this project integrates with **Firebase** for backend services and uses modern styling techniques to deliver a responsive and visually appealing interface.

## Features

- **User Authentication**: Secure login and signup with Firebase Authentication.
- **Video Streaming**: Stream videos using the `react-player` library.
- **Dynamic Content Rendering**: Display movie and show data dynamically using Firebase.
- **Responsive Design**: Built with **MDB React UI Kit** and **CSS animations** to ensure responsiveness across devices.
- **Toast Notifications**: Interactive feedback using `react-toastify`.
- **Alert Dialogs**: User prompts with **SweetAlert2**.

## Tech Stack

- **Frontend**: React, React Router DOM, Font Awesome
- **Styling**: MDB React UI Kit, Animate.css
- **Backend**: Firebase (Firestore, Authentication, Storage)
- **Build Tool**: Vite
- **Linting**: ESLint

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     VITE_API_KEY=your_api_key
     VITE_AUTH_DOMAIN=your_auth_domain
     VITE_PROJECT_ID=your_project_id
     VITE_STORAGE_BUCKET=your_storage_bucket
     VITE_MESSAGING_SENDER_ID=your_sender_id
     VITE_APP_ID=your_app_id
     VITE_TOKEN=your_token
     ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## Scripts

| Script      | Description                                 |
|-------------|---------------------------------------------|
| `dev`       | Starts the development server using Vite.   |
| `build`     | Builds the application for production.      |
| `lint`      | Runs ESLint for linting and code checks.    |
| `preview`   | Previews the production build.              |

---

## Dependencies

### Main Dependencies
- **React**: Frontend library for building UI.
- **Firebase**: Backend as a Service (BaaS) for authentication and data storage.
- **React Router DOM**: For routing and navigation.
- **React Player**: To stream video content.
- **React Toastify**: For notifications.

### Dev Dependencies
- **Vite**: A fast build tool for modern web development.
- **ESLint**: To ensure code quality and consistency.

---

## Folder Structure

```
netflix-clone/
│
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Application pages
│   ├── utils/          # Utility functions
│   ├── App.js          # Main app entry point
│   ├── main.js         # React DOM render
│
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Documentation
```

---

## Future Enhancements

- Add **user profiles** for a personalized experience.
- Implement **subscription-based access** using Firebase Functions.
- Enhance search and filtering capabilities.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
