
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore , collection, getDocs , addDoc} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
const firebaseConfig = {
  apiKey: "AIzaSyC6k_kOXeCqv310tI6qWlvXCKygoGryH3c",
  authDomain: "messages-6f7d7.firebaseapp.com",
  projectId: "messages-6f7d7",
  storageBucket: "messages-6f7d7.firebasestorage.app",
  messagingSenderId: "20017146456",
  appId: "1:20017146456:web:7a27ae21ac60d5a0bcf82d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const database = getFirestore(app);
 
export  async function getMessages(db) {
    const citiesCol = collection(db, 'messages');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }
 export  async function postMessage(msg) {
  console.log("entraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
 
     try {
    const docRef = await addDoc(collection(database, "messages"), msg);
    console.log("Document written with ID: ", docRef.id);
   return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
 
  }

  // console.log(getMessages(database))
  // {
  //   id: 2,
  //   name: "Karen",
  //   email: "karen@hola",
  //   message: "jola"
  // }