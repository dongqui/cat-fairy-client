import app from 'firebase/app';
import { firebaseConfig } from '../config';

app.initializeApp(firebaseConfig);

export const FirebaseAuth = app.auth();
