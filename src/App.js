import './css/app.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import Shrek from './pages/Shrek';
import GoodBye from './pages/GoodBye';
import Eyes from './pages/Eyes';
import BigEyes from './pages/BigEyes'
import Graph from './pages/Graph';
import Bargaining from './pages/Bargaining';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Start/>}/>
        <Route path="/shrek" exact element={<Shrek/>}/>
        <Route path="/eyes" exact element={<Eyes/>}/>
        <Route path="/big-eyes" exact element={<BigEyes/>}/>
        <Route path="/bargaining" exact element={<Bargaining/>}/>
        <Route path="/goodBye" exact element={<GoodBye/>}/>
        <Route path="/test" exact element={<Graph/>}/>
      </Routes>
    </Router>
  );
}

export default App;
