import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAblzgiKH5rSK5W8ccyP0v3u5bEFEZC_Bc",
  authDomain: "chat-app-2e8ed.firebaseapp.com",
  projectId: "chat-app-2e8ed",
  storageBucket: "chat-app-2e8ed.appspot.com",
  messagingSenderId: "571554874186",
  appId: "1:571554874186:web:fa77494f5452df99e8b7b3",
  measurementId: "G-918GBPW19B"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export const auth = firebase.auth();