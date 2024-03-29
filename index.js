// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDlXvJiiKf_k3kRzHdc1ujLHnNLZSiL9DI",
	authDomain: "nobottorobot.firebaseapp.com",
	projectId: "nobottorobot",
	storageBucket: "nobottorobot.appspot.com",
	messagingSenderId: "167701524383",
	appId: "1:167701524383:web:edd74f2dc030741bab17aa",
	measurementId: "G-9Q0MGD8N5B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
