// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Asegúrate de importar Firestore
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"; // Importa AsyncStorage

const firebaseConfig = {
  apiKey: "AIzaSyA65iwi-f5b3bTunUQQQuprtuUbpUx6FTw",
  authDomain: "pruebasfirebase-69264.firebaseapp.com",
  projectId: "pruebasfirebase-69264",
  storageBucket: "pruebasfirebase-69264.firebasestorage.app",
  messagingSenderId: "984574851986",
  appId: "1:984574851986:web:f170468c41b318218b1f4b",
  measurementId: "G-5NSW12TS9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage), // Configura la persistencia con AsyncStorage
});

export const db = getFirestore(app);
