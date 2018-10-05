import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBT4YvIBuYjEe0cmUtdBkpwZl2bs-rzeRE",
    authDomain: "agenda-api-1d606.firebaseapp.com",
    databaseURL: "https://agenda-api-1d606.firebaseio.com",
    projectId: "agenda-api-1d606",
    storageBucket: "agenda-api-1d606.appspot.com",
    messagingSenderId: "577550638614"
};

firebase.initializeApp(config);
export default firebase.database();