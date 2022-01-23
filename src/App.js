import Reaact, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import MarketPlace from "./tabs/Marketplace";
import DoodleCollab from "./tabs/DoodleCollab";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        {/*calling the header class in main*/}
        <Header />

        <div className="app__body">
          <SideBar /> 
          {/*Feed*/}
          {/*Widgets*/}

          <Routes>
            <Route exact path="MarketPlace" element={<MarketPlace />} />
            <Route path='/' element={<Feed />} />
            <Route exact path='DoodleCollab' element={<DoodleCollab />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
