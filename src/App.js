import React from "react";
import './App.css';

function App() {
  return (
     <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by {""}
        <a 
        href="https://app.netlify.com/sites/friendly-mayer-5513d1/overview"
        target="_blank">
          Mihae Tak </a>and is{" "} 
        <a
        href="https://github.com/mntak/react-weather-app"
        target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
       </div>
  );
}

export default App;
