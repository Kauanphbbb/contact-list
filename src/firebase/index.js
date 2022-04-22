// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCD0mseCOKKvGtqHgj37RZjeOYo3lRMoak',
  authDomain: 'contact-list-dbb74.firebaseapp.com',
  databaseURL: 'https://contact-list-dbb74-default-rtdb.firebaseio.com',
  projectId: 'contact-list-dbb74',
  storageBucket: 'contact-list-dbb74.appspot.com',
  messagingSenderId: '335327278017',
  appId: '1:335327278017:web:484b83c50a0c949277b540',
  measurementId: 'G-2FX6RQ3HX0',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);

export default firebaseApp;
