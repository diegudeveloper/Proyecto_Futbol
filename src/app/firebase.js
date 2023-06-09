// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_8pDsbWKE_3gXBzjM_VEdo_rHSuFl92E",
  authDomain: "proyecto-futbol-79e48.firebaseapp.com",
  projectId: "proyecto-futbol-79e48",
  storageBucket: "proyecto-futbol-79e48.appspot.com",
  messagingSenderId: "929917736621",
  appId: "1:929917736621:web:1f36a1d6b7fcf337581824"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);