import React, { useState } from "react";
import axios from "axios";

function Vote({ token, setView }) {
  const [candidate, setCandidate] = useState("");
  const [message, setMessage] = useState("");

  const handleVote = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/vote",
        { candidate },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Vote</h2>
      <input
        type="text"
        placeholder="Candidate"
        value={candidate}
        onChange={(e) => setCandidate(e.target.value)}
      />
      <button onClick={handleVote}>Vote</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Vote;
