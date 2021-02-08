import firebase from 'firebase';

var firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAvqvFIGSP7QFVfEcv38tIKG0Z5tsnpWsw",
    authDomain: "codercubs.firebaseapp.com",
    projectId: "codercubs",
    storageBucket: "codercubs.appspot.com",
    messagingSenderId: "950661507594",
    appId: "1:950661507594:web:32352b1bc20bb82aa00df3"
  });


  var db = firebaseApp.firestore();
  export {db}