# Paatshala - College Portal Management System

Paatshala is a web-based college portal management system built using React.js and Firebase. It aims to provide an efficient and user-friendly platform for students and teachers to manage various aspects of college life, including assignments, attendance, exams, timetable, events, library books, meetings, and assignment submissions.

## Features

- **Student Portal:** Students can log in to access their personalized dashboard, view upcoming assignments, check attendance records, see exam schedules, and receive important announcements.

- **Teacher Portal:** Teachers can log in to manage their courses, upload assignments, record attendance, schedule exams, and conduct virtual meetings with students.

- **Timetable:** Both students and teachers can access the college timetable to know about their classes and events.

- **Library Management:** Students can check the availability of library books, request book issuances, and receive notifications about book returns.

- **Assignment Submission:** Students can submit their assignments through the portal, and teachers can review and provide feedback online.

- **Event Calendar:** The portal includes an event calendar with important college events and activities.

## Technologies Used

- **Frontend:** React.js, Redux, HTML, CSS, JavaScript.

- **Backend:** Firebase - Authentication, Firestore (NoSQL database).

- **Storage:** Firebase Cloud Storage for storing assignment files and images.

## Installation and Usage

1. Clone the repository to your local machine.
```bash
git clone https://github.com/PratikAeraple/paatshala-college-portal-management.git
```

2. Install the required dependencies.
```bash
cd paatshala
npm install
```

3. Set up Firebase configuration.
   - Create a Firebase project and enable authentication and Firestore.
   - Replace the Firebase config in `src/firebase.js` with your own Firebase SDK config.

4. Run the development server.
```bash
npm start
```

5. Open `http://localhost:3000` in your web browser to access the Paatshala portal.

## Contributing

Contributions to Paatshala are welcome! If you find any bugs or want to suggest new features, feel free to open an issue or submit a pull request.

## Acknowledgments

- Special thanks to our college faculty and mentors for their guidance and support during the development of Paatshala.
