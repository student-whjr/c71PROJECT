import firebase from 'firebase'
require("@firebase/firestore")

 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyD5YRjJU8GDWtLu7tzWYAZPYz5llghNt9k",
  authDomain: "for-project-c71.firebaseapp.com",
  projectId: "for-project-c71",
  storageBucket: "for-project-c71.appspot.com",
  messagingSenderId: "837007799523",
  appId: "1:837007799523:web:0f55bad37cb975a0e2c1d6"
};
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

