import { useState } from "react";
import "./index.css";
import questions from "./question_data";
import "./Question_box.css";
import { useEffect } from "react";

export function Question_box() {
  const [currentquestion, setCurrentquestion] = useState(0);
  const [result, setResult] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showscore, setShowscore] = useState(false);

  let handleoption = (option) => {
    if (result !== "") return;
    const correctAnswer = questions[currentquestion].correctAnswer;

    if (option === correctAnswer) {
      setResult("correct");
      setScore((prev) => prev + 1);
    } else {
      setResult("incorrect");
    }
  };
  useEffect(() => {
    console.log("Updated Score:", score);
  }, [score]);

  let handlenextquestion = () => {
    if (currentquestion < questions.length - 1) {
      setCurrentquestion(currentquestion + 1);
      setSelectedOption("");
      setResult("");
    } else {
      setShowscore(true);
    }
  };

  let handlegoback = () => {
    if (currentquestion > 0) setCurrentquestion(currentquestion - 1);
  };

  if (showscore) {
    return (
      <div className="main-container">
        <h2>Quiz Completed 🎉</h2>
        <h3>
          Your Final Score: {score} / {questions.length}
        </h3>
        <button
          className="submit_button"
          onClick={() => {
            setCurrentquestion(0);
            setScore(0);
            setShowscore(false);
            setResult("");
            setSelectedOption("");
          }}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="main-container">
        <h2 className="Ques_number">Question {currentquestion + 1}</h2>
        <h4 className="Question">{questions[currentquestion].question}</h4>
        <div className="options">
          {questions[currentquestion].options.map((option, index) => (
            <label key={index} className="option_values">
              <input
                type="radio"
                name="option"
                value={option}
                onChange={() => setSelectedOption(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {result === "correct" && <p style={{ color: "green" }}>Correct ✅</p>}
        {result === "incorrect" && <p style={{ color: "red" }}>Incorrect ❌</p>}
        <button className="submit_button" onClick={handlegoback}>
          Back
        </button>
        <button
          className="submit_button"
          disabled={!selectedOption}
          onClick={() => handleoption(selectedOption)}
        >
          Submit
        </button>
        <button className="submit_button" onClick={handlenextquestion}>
          Next
        </button>
      </div>
    </>
  );
}
