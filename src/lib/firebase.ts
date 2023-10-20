// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJnZ1345w4yxTPo3ywA6H7JymedGAzlHk',
  authDomain: 'thumbnail-maker-47800.firebaseapp.com',
  projectId: 'thumbnail-maker-47800',
  storageBucket: 'thumbnail-maker-47800.appspot.com',
  messagingSenderId: '663980917421',
  appId: '1:663980917421:web:4df46df639ee64282abc24',
  measurementId: 'G-DK1K7CJVNE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default { analytics };
