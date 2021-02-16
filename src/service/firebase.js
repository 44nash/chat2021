import firebase from 'firebase/app'; // <---- This must be first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// vercel dev NOT npm start 


try {
  firebase.initializeApp({
    // apiKey: 'AIzaSyAFqTf7m80fGT4Hcdhj1hWenheNT6jmUTw',
    // authDomain: 'chat-2021-f6da6.firebaseapp.com',
    // projectId: 'chat-2021-f6da6',
    // storageBucket: 'chat-2021-f6da6.appspot.com',
    // messagingSenderId: '559935734252',
    // appId: '1:559935734252:web:bca2116a432f8c29c240c9',
    // measurementId: 'G-2J9NKYLX0G',
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

// Passing off firebase.auth() instead of firebase.auth
// allows us to share the same instance of Firebase throughout
// the entire app whenever we import it for here.v

export const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};
