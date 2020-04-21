import Firebase from 'firebase';
import config from './config';

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: 'test-keep-notes.firebaseapp.com',
  databaseURL: 'https://test-keep-notes.firebaseio.com',
  projectId: 'test-keep-notes',
  storageBucket: 'test-keep-notes.appspot.com',
  messagingSenderId: '645968773500',
  apiKey: config.appId
};

const app = Firebase.initializeApp(firebaseConfig);
export default {
  db: app.database()
}