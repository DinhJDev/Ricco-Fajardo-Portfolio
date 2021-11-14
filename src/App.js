import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var gapi = window.gapi;
  var CLIENT_ID = "806163216706-qvkqkgm721q4hsg6k5nuf5o5h54ketbo.apps.googleusercontent.com";
  var API_KEY = "AIzaSyChtXmFBJSZpVD-_8l4rzerEsl4KOxM8Ps";
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
