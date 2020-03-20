import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCzjdsjNFNx_b9gkuND3_dD-VtiLs1nVFI",
    authDomain: "assignment9-project.firebaseapp.com",
    databaseURL: "https://assignment9-project.firebaseio.com",
    projectId: "assignment9-project",
    storageBucket: "assignment9-project.appspot.com",
    messagingSenderId: "168493334695",
    appId: "1:168493334695:web:0b506b5cf8e7df3def1b82",
    measurementId: "G-6SHWNQ824K"
};
  
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;