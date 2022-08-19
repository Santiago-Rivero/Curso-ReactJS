import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyCIihhyrN8DejWgnZNgmoU1JvNtzVTP0",
  authDomain: "ecommerce-curso-coder.firebaseapp.com",
  projectId: "ecommerce-curso-coder",
  storageBucket: "ecommerce-curso-coder.appspot.com",
  messagingSenderId: "216777360401",
  appId: "1:216777360401:web:0261e0aebab4062836ddb0"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* <React.StrictMode> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  {/* </React.StrictMode> */}
  </>
)
