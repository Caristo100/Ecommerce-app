import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwX7St_LMP65S2SkuQiDveoCVlXDyCTAE",
  authDomain: "ecommerce-app-7182e.firebaseapp.com",
  projectId: "ecommerce-app-7182e",
  storageBucket: "ecommerce-app-7182e.appspot.com",
  messagingSenderId: "802588735409",
  appId: "1:802588735409:web:99488cd9c5e0be3005af90",
  measurementId: "G-NYB3HHR075",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
