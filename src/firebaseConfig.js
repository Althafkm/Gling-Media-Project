// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace the below config with your Firebase project's config
const firebaseConfig = {
    apiKey: "AIzaSyDvD3YcVnXlnefVKDGJQJpVBRiu0EnhvGs",
    authDomain: "gling-media-blog.firebaseapp.com",
    projectId: "gling-media-blog",
    storageBucket: "gling-media-blog.firebasestorage.app",
    messagingSenderId: "585064223854",
    appId: "1:585064223854:web:b9c4db8c9ad9b5a137c27f",
    measurementId: "G-BK2C5PK7H0"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
