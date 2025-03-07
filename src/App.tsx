import React, { useState, useEffect } from 'react';

import { exercise1 } from './data/exercise1Data.ts';

const App: React.FC = () => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const currentLevel = exercise1.levels[currentLevelIndex];
  const currentQuestion = currentLevel.questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentLevel.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentLevelIndex < exercise1.levels.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
      setCurrentQuestionIndex(0);
    }
    handleScore();
  };

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleScore = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };
  useEffect(() => {
    console.log('Updated score:', score);
    console.log(selectedOption);
  }, [score, selectedOption]);

  return (
    <>
      <h1>{exercise1.title}</h1>
      <h2>Level {currentLevel.level}</h2>
      <div>
        <p>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <button
                onClick={() => handleSelectedOption(option)}
                className={`px-4 py-2 rounded border border-black ${
                  option === selectedOption ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="px-4 py-2 rounded border border-black"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
        <h2>{score} correct answers</h2>
      </div>
    </>
  );
};

export default App;

//NEED TO RENDER TEXT BOX
