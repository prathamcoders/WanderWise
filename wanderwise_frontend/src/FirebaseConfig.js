import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAQpgx4YjNj2WnHL3JtZ8ZwsQZHkkD37Y",
    authDomain: "wanderwise-fc1c0.firebaseapp.com",
    projectId: "wanderwise-fc1c0",
    storageBucket: "wanderwise-fc1c0.appspot.com",
    messagingSenderId: "517735191090",
    appId: "1:517735191090:web:9a37f1751d23e58ddfe22b",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
