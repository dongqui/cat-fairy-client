import firebase from 'firebase';
import { firebaseConfig } from './config';

const app = firebase.initializeApp(firebaseConfig);

export const fireStore = app.firestore();
export const fireAuth = app.auth();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
