import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Topics from "./pages/Topics";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/quiz/:topicId" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;