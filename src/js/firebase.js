import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACCwxuLNaqXe80qr7C-N2vEwQKnw-1qGY",
  authDomain: "taglines-8e399.firebaseapp.com",
  projectId: "taglines-8e399",
  storageBucket: "taglines-8e399.appspot.com",
  messagingSenderId: "358810107645",
  appId: "1:358810107645:web:48d96a7653573b76df8894",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
