import Reaact, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import MarketPlace from "./tabs/Marketplace";


function App() {
  return (
    <div className="app">
      
      {/*calling the header class in main*/}
      <Header />
      <MarketPlace />

      <div className="app__body">
        <SideBar />
        <Feed />
        {/*Feed*/}
        {/*Widgets*/}
      </div>
      
    </div>
  );
}

export default App;
