import React from "react";
import "./App.css";

function App() {
  const handleRedirect = () => {
    window.location.href = "http://172.206.251.171:3000"; // Redirect to the external server URL
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React App</h1>
        <p>This is a basic React app.</p>
        <button onClick={handleRedirect}>Go to External Server</button>
      </header>
    </div>
  );
}

export default App;
