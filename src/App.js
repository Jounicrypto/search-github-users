import React from 'react';
import './App.css';
import DisplayTable from './components/DisplayTable';
import Profile from './components/Profile';




function App() {
  return (
    <div className="App">
      <div claasName='nav'>
        <nav>Search Github Users</nav>
      </div>
      <Profile/>
    </div>
  );
}

export default App;
