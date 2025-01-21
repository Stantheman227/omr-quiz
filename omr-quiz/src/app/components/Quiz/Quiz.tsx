"use client";
import { useState, useEffect } from "react";
import React from "react";
import FinishedQuiz from "./FinishedQuiz";
import { IQuestion } from "./DataModel";

export default function Quiz() {
  const [jsonData, setJsonData] = useState<IQuestion[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answerArray, setAnswerArray] = useState<number[]>([]); // Use state here

  {
    /*
     Setting answer array
      */
  }
  function answerArraySetter(ansIndex: number) {
    setAnswerArray([...answerArray, ansIndex]);
    setCurrentStep(currentStep + 1);
    console.log(answerArray);
  }

  {
    /*
     Fetching data from JSON file
      */
  }
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/questions.json");
      const data = await res.json();
      setJsonData(data);
    }
    fetchData();
  }, []);

  {
    /*
     Loading Buffer
      */
  }

  if (jsonData.length < 1) {
    return <div>Loading...</div>;
  }

  {
    /*
     Completed Quiz
      */
  }

  if (currentStep >= jsonData.length) {
    return <FinishedQuiz jsonData={jsonData} answerArray={answerArray} />;
  }

  {
    /* Live Quiz */
  }

  return (
    <div className="flex flex-row container mx-auto mt-10 h-full py-10 w-full">
      <div className="flex basis-2/3 flex-col items-start space-y-5 pt-5 w-full">
        <p className="w-full text-[30px] text-white bg-black font-sans-extra-bold uppercase p-1">
          {jsonData[currentStep].question}
        </p>
        <div className="w-full grid grid-cols-1 gap-2 rounded-xl">
          {jsonData[currentStep].options.map((option, ansIndex) => (
            <div
              key={ansIndex}
              className="bg-black p-2 rounded-l hover:bg-omr-purple hover:font "
            >
              <button
                onClick={() => answerArraySetter(ansIndex)}
                className="h-full w-full cursor-pointer"
              >
                {" "}
                <p className="text-xl text-white text-start">
                  {ansIndex + 1}. {option}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Section*/}
      <div className="flex flex-col w-full basis-1/3 items-center justify-center space-x-10 space-y-10">
        <p className="font-sans-bold text-xl">
          Dein aktueller Progress im Quiz ist {currentStep + 1} / 10
        </p>
        <div className="progress-circle-container">
          <svg
            className="progress-circle"
            width="150"
            height="150"
            viewBox="0 0 36 36"
          >
            <circle
              className="circle-background"
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="2"
            />
            <circle
              className="circle-progress"
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke="#F2B200"
              strokeWidth="2"
              strokeDasharray="100, 100"
              strokeDashoffset={100 - currentStep * 10}
              strokeLinecap="round"
            />
          </svg>
          <div className="progress-text">{currentStep * 10}%</div>
        </div>
      </div>
    </div>
  );
}
