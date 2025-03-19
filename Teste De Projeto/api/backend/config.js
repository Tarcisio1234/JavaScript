const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, query, where, onSnapshot, orderBy } = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBCKW8HS0hoS4Y6xS82Vi3ryect-8e_1Eo",
    authDomain: "teste-7640f.firebaseapp.com",
    projectId: "teste-7640f",
    storageBucket: "teste-7640f.firebasestorage.app",
    messagingSenderId: "572290376371",
    appId: "1:572290376371:web:def3b973fe0e5b670bc6c6"
  };

initializeApp(firebaseConfig)
const db = getFirestore()
const User = collection(db, "usuarios");
module.exports = User;
