import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/storage"


var firebaseConfig = {
  apiKey: "AIzaSyB8Tp9ablvjYvlP0UrJwuyWLU5Vp3R5_fY",
  authDomain: "image-gallery-22e89.firebaseapp.com",
  projectId: "image-gallery-22e89",
  storageBucket: "image-gallery-22e89.appspot.com",
  messagingSenderId: "808167148498",
  appId: "1:808167148498:web:7d050ab9dd30c19a3e960b",
  measurementId: "G-C4XM45QSMD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage()

const projectFirestore = firebase.firestore();

// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore };