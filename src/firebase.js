
import { initializeApp } from "firebase/app";

import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV-_Ue9UK6sK-T1rpXtsXEgeKvZCnqhgw",
  authDomain: "e-commerce-4c85e.firebaseapp.com",
  projectId: "e-commerce-4c85e",
  storageBucket: "e-commerce-4c85e.appspot.com",
  messagingSenderId: "1070838608642",
  appId: "1:1070838608642:web:02ff4e0ef580bdcfa9c81b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
.then(() =>{
    console.log('Persistence enabled to LocalStorage!')
})
.catch((err) => {
    console.error('Error enabling persistence:', err);
});
