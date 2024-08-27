import React from 'react'
import './App.css'
import Home from "./components/Home";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/Search';
import Player from './components/Player';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/upcoming" element={ <Upcoming/> }></Route>
          <Route path="/top-rated" element={ <TopRated/> }></Route>
          <Route path="/popular" element={ <Popular/> }></Route>
          <Route path="/search" element={ <Search/> }></Route>
          <Route path="/player/:id" element={ <Player/> }></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
