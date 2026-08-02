import React, { useReducer } from "react";

import { Quizstate, Quizstatus, Quizaction } from "./../../types";
import { QuizReducer } from "./../../QuizReducer";

const initialstate: Quizstate = {
  questionsList: [],
  questionIndex: 0,
  quizstatus: Quizstatus.Start,
  score: 0,
};

export const QuizContext = React.createContext<{
  data: Quizstate;
  dispatch: React.Dispatch<Quizaction>;
}>({
  data: initialstate,
  dispatch: () => {},
});

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, dispatch] = useReducer(QuizReducer, initialstate);

  return (
    <QuizContext.Provider value={{ data, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;