import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Allroutes from './components/Routes/All.routes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Allroutes />
    
    </div>
  );
}

export default App;
