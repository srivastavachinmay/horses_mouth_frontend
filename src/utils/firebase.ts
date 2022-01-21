import { initializeApp } from "firebase/app";
import { getAuth }       from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBkBgUBeJWsJqlTx0-yO7nF68_r5zhg87U",
    authDomain: "horses-mouth-decbd.firebaseapp.com",
    projectId: "horses-mouth-decbd",
    storageBucket: "horses-mouth-decbd.appspot.com",
    messagingSenderId: "420390823563",
    appId: "1:420390823563:web:6ca0636f8f74503d9e568e",
    measurementId: "G-K53SDRSMJH"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

