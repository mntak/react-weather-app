import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
