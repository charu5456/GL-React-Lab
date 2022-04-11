import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DataSet from './components/dataSet';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<DataSet />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
