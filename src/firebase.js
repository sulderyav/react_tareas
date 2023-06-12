// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDW-LlGHiPRpULrB1OpMAo6sahQ4tVWD2M',
  authDomain: 'todo-sul.firebaseapp.com',
  projectId: 'todo-sul',
  storageBucket: 'todo-sul.appspot.com',
  messagingSenderId: '100000801160',
  appId: '1:100000801160:web:f30934eb17ab524bb79a3d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
