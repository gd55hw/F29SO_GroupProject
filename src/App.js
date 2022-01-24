import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import MarketPlace from "./tabs/Marketplace";
import DoodleCollab from "./tabs/DoodleCollab";
import Login from "./tabs/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //When there is no user
  const user = 'Haia';
  return (
    <Router>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app__body">
              {/*<SideBar />*/}
              {/*Feed*/}

              <Routes>
                <Route exact path="Login" element={<Login />} />
                <Route exact path="MarketPlace" element={<MarketPlace />} />
                <Route path="/" element={<Feed />} />
                <Route exact path="DoodleCollab" element={<DoodleCollab />} />
              </Routes>
            </div>
          </>
        )}
        {/*calling the header class in main*/}
      </div>
    </Router>
  );
}

export default App;
