import firebase from 'firebase';
import { firebaseConfig } from './config';

const app = firebase.initializeApp(firebaseConfig);

export const FireAuth = app.auth();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
