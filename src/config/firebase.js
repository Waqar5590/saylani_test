import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyACe8-T7zUWi2Nma24GRmI02sWxUEM4mzQ",
    authDomain: "hackathon-5bef5.firebaseapp.com",
    projectId: "hackathon-5bef5",
    storageBucket: "hackathon-5bef5.appspot.com",
    messagingSenderId: "1057206596036",
    appId: "1:1057206596036:web:cf4953df32e23ab2ba3491",
    measurementId: "G-0GBRWMPHT8"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { analytics, auth, firestore, storage }