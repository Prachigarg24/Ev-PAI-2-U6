import { useEffect, useState } from "react";
import axios from "../axios";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("/attempts/123").then((res) => {
      setResults(res.data);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Quiz Results</h2>
      <ul>
        {results.map((r) => (
          <li key={r._id}>
            Topic: {r.topicId} | Score: {r.score} | Date:{" "}
            {new Date(r.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;