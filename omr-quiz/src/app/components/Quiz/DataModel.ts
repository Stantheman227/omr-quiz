export interface IQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface IFinishedQuizProps {
  jsonData: IQuestion[];
  answerArray: number[];
}