import Reaact, { useState } from "react";
import './App.css';
import Header from "./components/Header";

function windowSizeChange() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  return size;
}


function App() {
  const [height, width] = windowSizeChange();

  return (
    <div className="app">
      <Header />
      
    </div>
  );
}

export default App;
