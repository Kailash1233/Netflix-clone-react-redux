import firebase from 'firebase'



const firebaseConfig = {
	apiKey: "AIzaSyALTF7WAP5vg83geYjQ0A2S_jAQMKNbZqw",
    authDomain: "netflix-clone-1055d.firebaseapp.com",
    projectId: "netflix-clone-1055d",
    storageBucket: "netflix-clone-1055d.appspot.com",
    messagingSenderId: "997162823751",
    appId: "1:997162823751:web:b1928448b2d8eac09dc162"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;