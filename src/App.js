import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/details' element={<Details />}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
