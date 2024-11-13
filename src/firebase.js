// firebase.js
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv4MER1TyX_GPsHCwZzWnJDix1RAwiMZ8",
  authDomain: "netflix-clone-8cbf9.firebaseapp.com",
  projectId: "netflix-clone-8cbf9",
  storageBucket: "netflix-clone-8cbf9.appspot.com",
  messagingSenderId: "486402509496",
  appId: "1:486402509496:web:6bf395696509db44ec424d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

const logout = async (navigate) => {
  await signOut(auth);
  navigate("/login"); // Redirect to login page after logout
};

export { auth, db, login, signup, logout };
