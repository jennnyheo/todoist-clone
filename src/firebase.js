import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDtPrr5GBPqFxaAxhbMm5kesDYMa9MkJE8",
    authDomain: "todo-tutorial-b9e96.firebaseapp.com",
    databaseURL: "https://todo-tutorial-b9e96-default-rtdb.firebaseio.com",
    projectId: "todo-tutorial-b9e96",
    storageBucket: "todo-tutorial-b9e96.appspot.com",
    messagingSenderId: "79166284126",
    appId: "1:79166284126:web:f71b495c1bc4a1ae7fafcf",
    measurementId: "G-Q7FVKHLFTD"
  });

  export { firebaseConfig as firebase};