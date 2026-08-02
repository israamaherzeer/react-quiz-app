import  { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { QuizContext } from './../provider/Provider';
import { getQuestions, formatQuestions } from '../../api/triviaApi';
import { actionTypes } from '../../types';
import Loading from '../Loading/Loading';

const Start = () => {

  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
const [loading,setLoading] = useState(false);

 const startQuiz = async () => {

  setLoading(true);


  const questions = await getQuestions(
    amount,
    category,
    difficulty
  );


  const formattedQuestions = formatQuestions(questions);


  dispatch({
    type: actionTypes.LoadQuestions,
    payload:{
      questions:formattedQuestions
    }
  });


  dispatch({
    type:actionTypes.Start
  });


  navigate('/quiz/0');

};
if(loading){
  return <Loading/>
}

  return (
    <>
    

      <div className='smallContainer container'>

  <h1>Welcome!</h1>
  <p className="subtitle">
  Choose your preferences and start your quiz!
</p>

  <div className="optionGroup">
    <label>Number of Questions</label>
    <select 
      value={amount}
      onChange={(e)=>setAmount(Number(e.target.value))}
    >
      <option value={5}>5 Questions</option>
      <option value={10}>10 Questions</option>
      <option value={15}>15 Questions</option>
    </select>
  </div>


  <div className="optionGroup">
    <label>Category</label>
    <select
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
    >
    <option value="9">General Knowledge</option>
  <option value="18">Science: Computers</option>
  <option value="17">Science & Nature</option>
  <option value="19">Science: Mathematics</option>
  <option value="21">Sports</option>
  <option value="22">Geography</option>
  <option value="23">History</option>
  <option value="20">Mythology</option>


  <option value="27">Animals</option>
  <option value="10">Books</option>

    </select>
  </div>


  <div className="optionGroup">
    <label>Difficulty</label>
    <select
      value={difficulty}
      onChange={(e)=>setDifficulty(e.target.value)}
    >
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>


  <button 
    onClick={startQuiz} 
    className='start button'
  >
    Start Quiz
  </button>

</div>
    </>
  )
}

export default Start;