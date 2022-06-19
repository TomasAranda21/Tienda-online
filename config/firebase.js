import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoCNf4cbDVRbDAFeC_NpsbPkMxtYF0qdE",
  authDomain: "tienda-a9a52.firebaseapp.com",
  projectId: "tienda-a9a52",
  storageBucket: "tienda-a9a52.appspot.com",
  messagingSenderId: "367066866775",
  appId: "1:367066866775:web:5db135d1e1d0ec2c652f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
