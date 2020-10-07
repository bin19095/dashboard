import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAsfkFW-hNOk7lWCoTk_nxdtNQHVufuqqo",
    authDomain: "dashboard-b760c.firebaseapp.com",
    databaseURL: "https://dashboard-b760c.firebaseio.com",
    projectId: "dashboard-b760c",
    storageBucket: "dashboard-b760c.appspot.com",
    messagingSenderId: "348953885458",
    appId: "1:348953885458:web:6f283388aa16ada27ed1cb",
    measurementId: "G-9BMLGRZTHP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;