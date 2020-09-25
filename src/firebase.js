import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCNWVQ5xH4eggr_TjJM1Ur6w984Tt9XiD4",
  authDomain: "practice-clone-ig-reels.firebaseapp.com",
  databaseURL: "https://practice-clone-ig-reels.firebaseio.com",
  projectId: "practice-clone-ig-reels",
  storageBucket: "practice-clone-ig-reels.appspot.com",
  messagingSenderId: "333681353029",
  appId: "1:333681353029:web:dd9fdbafff094028449e2c",
  measurementId: "G-7B2EQ9E4JN"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
  
 const db = firebaseApp.firestore();
 export default db;