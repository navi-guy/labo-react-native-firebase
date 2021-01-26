import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCeG_lC4gcl9hFbZpnjK0H_qO7VEscZpcw',
  authDomain: 'react-native-91d23.firebaseapp.com',
  databaseURL: 'https://react-native-91d23.firebaseio.com',
  projectId: 'react-native-91d23',
  storageBucket: 'react-native-91d23.appspot.com',
  messagingSenderId: '717114375586',
  appId: '1:717114375586:android:9bcf306c03bcc451b2c6fb',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
