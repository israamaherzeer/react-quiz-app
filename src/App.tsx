import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import QuizProvider, { QuizContext } from "./component/provider/Provider";
import Start from "./component/StartPage/StartPage";
import Question from "./component/question/Question";
import Score from "./component/score/Score";

import { useContext } from "react";
import { actionTypes } from "./types";


function QuizRoutes(){

  const { data, dispatch } = useContext(QuizContext);


  const nextQuestion = (
    selected:boolean,
    isCorrect:boolean|null
  ) => {

    dispatch({
      type: actionTypes.NextQuestion,
      paylod:{
        selected,
        isCorrect
      }
    });

  };


  return (
    <Routes>

   <Route
 path="/"
 element={<Start/>}
/>

      <Route
        path="/quiz/:index"
        element={
          <Question
            data={data.questionsList}
            next={nextQuestion}
            index={data.questionIndex}
          />
        }
      />


     <Route
 path="/score"
 element={
   <Score
     score={data.score}
     length={data.questionsList.length}
     dispatch={dispatch}
   />
 }
/>

    </Routes>
  )
}



function App(){

return (

<QuizProvider>

<BrowserRouter>

<QuizRoutes/>

</BrowserRouter>

</QuizProvider>

)

}


export default App;