import React, { useState, useEffect } from "react";
import axios from "axios";

function VoteCounts({ token, setView }) {
  const [counts, setCounts] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/votes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCounts(response.data);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };

    fetchCounts();
  }, [token]);

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
      <h2>Vote Counts</h2>
      {message && <p>{message}</p>}
      {Object.keys(counts).map((candidate) => (
        <div key={candidate}>
          {candidate}: {counts[candidate]}
        </div>
      ))}
    </div>
  );
}

export default VoteCounts;
