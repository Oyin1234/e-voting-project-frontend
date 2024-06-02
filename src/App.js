import "./App.css";
import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Vote from "./components/Vote";
import VoteCounts from "./components/VoteCounts";

function App() {
  const [token, setToken] = useState("");
  const [view, setView] = useState("login"); // 'login', 'register', 'vote', 'counts'

  return (
    <div className="App">
      {view === "login" && <Login setToken={setToken} setView={setView} />}
      {view === "register" && <Register setView={setView} />}
      {view === "vote" && <Vote token={token} setView={setView} />}
      {view === "counts" && <VoteCounts token={token} setView={setView} />}
      <div>
        {view !== "login" && (
          <button onClick={() => setView("login")}>Login</button>
        )}
        {view !== "register" && (
          <button onClick={() => setView("register")}>Register</button>
        )}
        {view !== "vote" && (
          <button onClick={() => setView("vote")}>Vote</button>
        )}
        {view !== "counts" && (
          <button onClick={() => setView("counts")}>Vote Counts</button>
        )}
      </div>
    </div>
  );
}

export default App;
