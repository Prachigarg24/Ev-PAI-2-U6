import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/topics").then((res) => {
      setTopics(res.data);
    });
  }, []);

  const handleStartQuiz = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Available Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic._id}>
            {topic.name} ({topic.difficulty}){" "}
            <button onClick={() => handleStartQuiz(topic._id)}>Start</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;