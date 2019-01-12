import firebase from 'firebase/app'
import 'firebase/storage'
var config = {
  apiKey: "AIzaSyCH8CB1UbkzCjIKxus989oa8T66AwAFSl4",
  authDomain: "paytmhack-b4494.firebaseapp.com",
  databaseURL: "https://paytmhack-b4494.firebaseio.com",
  projectId: "paytmhack-b4494",
  storageBucket: "paytmhack-b4494.appspot.com",
  messagingSenderId: "970701047561"
};
firebase.initializeApp(config);

const storage=firebase.storage();

export{
  storage,firebase as default
}