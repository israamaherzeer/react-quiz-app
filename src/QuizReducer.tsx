import { Quizaction, Quizstate, Quizstatus, actionTypes } from './types';

const QuizReducer =(state:Quizstate ,action :Quizaction) : Quizstate =>{
switch (action.type) {
case  actionTypes.Init:{
  const stored = localStorage.getItem("questionList");
  const questions = stored ? JSON.parse(stored) : [];
return {...state, questionsList: questions }; 
}
case actionTypes.LoadQuestions: {
  return {
    ...state,
    questionsList: action.payload.questions,
    questionIndex: 0
  };
}
case  actionTypes.Start:{
  return {...state,quizstatus: Quizstatus.InProgress, score: 0, }; 
}

case actionTypes.NextQuestion: {
    const { selected, isCorrect } = action.paylod;
    let nextIndex = state.questionIndex;
    let score = state.score;

    if (selected) nextIndex += 1;
    if (selected && isCorrect) score += 1;

    const isComplete = nextIndex >= state.questionsList.length;
    console.log(nextIndex);
    console.log(state.questionsList.length)
  
    return {
      ...state,
      questionIndex: nextIndex,
      score: score,
      quizstatus: isComplete ? Quizstatus.Complete : state.quizstatus,
    };
  }

  case  actionTypes.restart:{
    return {
      ...state,
      questionIndex: 0,
      score: 0,
      quizstatus: Quizstatus.Start,

  };
  }

    default:
      return {...state}
}
    

}
export   {QuizReducer};