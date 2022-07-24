const firebaseConfig = {
    apiKey: "AIzaSyBFXRcAcQHlRMCay6-O001xbPeOIAiq97I",
    databaseURL: "https://goodfood-6d6c4-default-rtdb.firebaseio.com",
    authDomain: "goodfood-6d6c4.firebaseapp.com",
    projectId: "goodfood-6d6c4",
    storageBucket: "goodfood-6d6c4.appspot.com",
    messagingSenderId: "257462296124",
    appId: "1:257462296124:web:1cc0dc6491c2f8d149ed39",
    measurementId: "G-X23GWG8Z4G"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database();