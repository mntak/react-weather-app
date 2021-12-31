import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by {""}
          <a
            href="https://app.netlify.com/sites/friendly-mayer-5513d1/overview"
            target="_blank"
            rel="noreferrer"
          >
            Mihae Tak{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/mntak/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
