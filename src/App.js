import React from 'react';
import './App.css';
import { Main } from './components/Main';
import * as firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyBxlwzW2fztFVJuBCJZp7EVC-sg8Mo-pWE",
    authDomain: "webmenu-c7757.firebaseapp.com",
    databaseURL: "https://webmenu-c7757.firebaseio.com",
    projectid: "webmenu-c7757",
    storaBucket: "webmenu-c7757.appspot.com",
};

firebase.initializeApp(config);

function App() {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
