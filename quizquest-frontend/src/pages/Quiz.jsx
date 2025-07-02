import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axios";

const Quiz = () => {
  const { id } = useParams(); // topicId
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/questions/${id}`).then((res) => {
      setQuestions(res.data);
    });
  }, [id]);

  const handleOptionChange = (qIndex, optionIndex) => {
    setAnswers({ ...answers, [qIndex]: optionIndex });
  };

  const handleSubmit = () => {
    const payload = {
      userId: "123", // hardcoded
      topicId: id,
      answers: Object.values(answers),
    };

    axios.post("/attempts", payload).then(() => {
      navigate("/results");
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Quiz</h2>
      {questions.map((q, index) => (
        <div key={q._id}>
          <p>
            Q{index + 1}: {q.question}
          </p>
          {q.options.map((opt, optIndex) => (
            <label key={optIndex}>
              <input
                type="radio"
                name={`q${index}`}
                value={optIndex}
                checked={answers[index] === optIndex}
                onChange={() => handleOptionChange(index, optIndex)}
              />
              {opt}
              <br />
            </label>
          ))}
        </div>
      ))}
      <br />
      <button onClick={handleSubmit} disabled={questions.length !== Object.keys(answers).length}>
        Submit Quiz
      </button>
    </div>
  );
};

export default Quiz;