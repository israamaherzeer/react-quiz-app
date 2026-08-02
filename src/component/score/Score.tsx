import {useNavigate} from 'react-router'
import { actionTypes, Quizaction } from '../../types';
import style from './Score.module.css';



interface Iprops {
  score:number;
  length:number;
  dispatch: React.ActionDispatch<[action: Quizaction]>
}


function Score(props:Iprops) {

const navigate = useNavigate();

const percentage = Math.round(
  (props.score / props.length) * 100
);


const getMessage = () => {

  if(percentage >= 80)
    return "Excellent! ";

  if(percentage >= 50)
    return "Good Job! ";

  return "Keep Practicing ";

}



const restartQuiz = () => {

 props.dispatch({
   type: actionTypes.restart
 });

 navigate('/');

}



return (

<div className={style.scoreContainer}>


<h1>Quiz Completed 🎯</h1>


<div className={style.circle}>

  {percentage}%

</div>


<h2>
 {getMessage()}
</h2>


<p>
You answered 
<strong> {props.score} </strong>
out of 
<strong> {props.length} </strong>
questions correctly.
</p>



<button 
onClick={restartQuiz}
className="button"
>
Restart 
</button>


</div>

)

}


export default Score;