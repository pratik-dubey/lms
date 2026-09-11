import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
   apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lmse-62ffa.firebaseapp.com",
  projectId: "lmse-62ffa",
  storageBucket: "lmse-62ffa.firebasestorage.app",
  messagingSenderId: "18585241706",
  appId: "1:18585241706:web:1668e0af481c54992c2213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}