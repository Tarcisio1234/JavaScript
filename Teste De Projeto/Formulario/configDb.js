const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyBCKW8HS0hoS4Y6xS82Vi3ryect-8e_1Eo",
    authDomain: "teste-7640f.firebaseapp.com",
    projectId: "teste-7640f",
    storageBucket: "teste-7640f.firebasestorage.app",
    messagingSenderId: "572290376371",
    appId: "1:572290376371:web:def3b973fe0e5b670bc6c6"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Usuarios");
module.exports = User;