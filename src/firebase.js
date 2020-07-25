import firebase from 'firebase';
import { firebaseConfig } from './config';

const app = firebase.initializeApp(firebaseConfig);

const { createUserWithEmailAndPassword } = app.auth();
export {
  createUserWithEmailAndPassword
}
