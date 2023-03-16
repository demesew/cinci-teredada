// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5fEBmTmYMK7bDPAa6MRUPdLDL83MxeVI",
  authDomain: "cinci-terdada.firebaseapp.com",
  projectId: "cinci-terdada",
  storageBucket: "cinci-terdada.appspot.com",
  messagingSenderId: "871534179972",
  appId: "1:871534179972:web:d65b5420e55b6e9abd34d1",
  measurementId: "G-4QM05HJR65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export app and analytics for use in other files
export { app, analytics };
