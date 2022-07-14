import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "chinese-vaca",
  storageBucket: "chinese-vaca.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// firebase를 호출하는 순간 초기화 해준다.
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
