import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contex/quiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
