/* eslint-disable import/named */
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJRLZUNi5bSh49f06uZlcTxvHtV0Zx0ks",
  authDomain: "finnhub-app.firebaseapp.com",
  projectId: "finnhub-app",
  storageBucket: "finnhub-app.appspot.com",
  messagingSenderId: "627530138460",
  appId: "1:627530138460:web:9e4d88f96da542a796b799",
  measurementId: "G-7KSELNNELG",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
