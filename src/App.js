import React from "react";
import "./App.css";

function App() {
  const handleRedirect = () => {
    window.location.href = "/feature"; // Redirect to /feature on the main server
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React App</h1>
        <p>This is a basic React app.</p>
        <button onClick={handleRedirect}>Feature</button>
      </header>
    </div>
  );
}

export default App;
