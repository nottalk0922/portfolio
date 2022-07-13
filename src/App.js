import { useEffect, useState } from 'react'
import './App.css';
import { firestore } from "./firebase"
import Navbar from "./components/Navbar"
import Body from "./components/Body"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
