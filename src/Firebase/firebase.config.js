
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyB63ga7FWDVwpijpPOndvOJsSTdfERXv34",
//   authDomain: "moice-jewelry.firebaseapp.com",
//   projectId: "moice-jewelry",
//   storageBucket: "moice-jewelry.firebasestorage.app",
//   messagingSenderId: "492611642296",
//   appId: "1:492611642296:web:fb2603d49fb8a46bff254d"
// };

// const app = initializeApp(firebaseConfig);




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;