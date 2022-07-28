// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3oepa5l7nbMzW5lQc3ky8W51WyX6HfrY",
  authDomain: "homies-night-helguera-zanotta.firebaseapp.com",
  projectId: "homies-night-helguera-zanotta",
  storageBucket: "homies-night-helguera-zanotta.appspot.com",
  messagingSenderId: "972987868802",
  appId: "1:972987868802:web:c9942d9ed06b89a693b69b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const initFirebase = () =>{
    return app
}

export {initFirebase}
