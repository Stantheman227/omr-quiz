"use client";
import { useState, useEffect } from "react";
import React from "react";
import QuizStepBar from "./QuizStepBar";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function Quiz() {
  const [jsonData, setJsonData] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/questions.json");
      const data = await res.json();
      setJsonData(data);
    }
    fetchData();
  }, []);

  if (jsonData.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-[50px] font-omr-sans text-[25px]">
        <div className="grid grid-cols-1 gap-2 p-1 bg-gray-500 flex-col rounded-xl ">
          <div className="grid grid-cols-2 gap-5 p-1">
            <p>{jsonData[currentStep].question}</p>
            {jsonData[currentStep].options.map((answer, ansIndex) => (
              <div
                key={ansIndex}
                className="bg-gray-300 p-5 rounded-xl hover:opacity-50"
              >
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
