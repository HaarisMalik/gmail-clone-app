import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5OVTqbORVc0Ia9swW4ecjw0e30WgslQ8",
    authDomain: "clone-app-477fd.firebaseapp.com",
    projectId: "clone-app-477fd",
    storageBucket: "clone-app-477fd.appspot.com",
    messagingSenderId: "833797578528",
    appId: "1:833797578528:web:2012fb55b4a6e4b3d24145"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }