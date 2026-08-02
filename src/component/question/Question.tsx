import { useState, useEffect } from 'react'
import style from './Question.module.css'
import {   questions } from './../../types';
import  {useNavigate}from 'react-router'
import { useParams } from 'react-router';



interface Iprops {
    data: questions[] ;
    next: (selected: boolean, isCorrect: boolean|null ) => void; 
    index:number;
}
function Question(props: Iprops) {
 const { index } = useParams(); 
const questionIndex = Number(index);
const question = props.data ? props.data[questionIndex] : undefined;
    
    const navigate =useNavigate();
    const [userChoice, setUserChoice] = useState<string| null>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [selected, setSelected] = useState(false);
    const [disabled, setDisabled] = useState(false);
    
    useEffect(() => {
        setUserChoice(null);
        setIsCorrect(null);
        setSelected(false);
        setDisabled(false);
        
    }, [question]); 
    
    const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserChoice(e.target.value);
    };
    
    const handleRightAnswer = () => {
        if (userChoice) {
            setDisabled(true);
            setSelected(true);
            setIsCorrect(userChoice === question?.correctAnswer);
        }
    };
    
 
    return (
        <>
       
    <div className='quizContainer  container'>


<div className={style.progressContainer}>

  <div className={style.questionNumber}>
   
    Question {questionIndex + 1} / {props.data.length}
  </div>

  <div className={style.progressBar}>
    <div
      className={style.progress}
      style={{
        width: `${((questionIndex + 1) / props.data.length) * 100}%`
      }}
    >
    </div>
  </div>

 

</div>
    <p className={style.question}>{question?.question}</p>
        {question?.answers.map((answer) => (
        <>
        <div className={style.answers}>
        <div  className={`${style.answer} ${userChoice === answer && isCorrect ? style.green : ""}
            ${userChoice === answer && isCorrect === false ? style.red : ""}`}>
                        
            <input
            type="radio"
            name="answer"
            value={answer}
            disabled={disabled}
            onChange={handleAnswer}
            checked={userChoice === answer}
            />
            <label htmlFor={answer}>{answer}</label>
            </div>
            </div>
            </>
        ))}
    
    <div className={style.buttons}>
    <button onClick={handleRightAnswer} className="button">Submit</button>
   <button 
onClick={() => {
    props.next(selected, isCorrect);

    if (questionIndex + 1 >= props.data.length) {
        navigate('/score');
    } else {
        navigate(`/quiz/${questionIndex + 1}`);
    }
}}
        disabled={!selected} className="button">Next</button>
        </div>
        <p className={style.feedback}>
        {!selected ? "Select an answer" : isCorrect === null ? "" : isCorrect ? "Correct answer!" :
        `Incorrect answer. The correct answer is ${question?.correctAnswer}`}
        </p>
    <hr />

    </div>
    </>
);
}

export default Question;
