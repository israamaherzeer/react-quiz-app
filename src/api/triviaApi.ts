import axios from "axios";

export const getQuestions = async (
  amount: number,
  category: string,
  difficulty: string
) => {
  const url =
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  const response = await axios.get(url);

  return response.data.results;
};


const decodeHTML = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};


export const formatQuestions = (questions: any[]) => {
  return questions.map((q) => {

    const answers = [
      q.correct_answer,
      ...q.incorrect_answers
    ].map(answer => decodeHTML(answer));


    return {
      question: decodeHTML(q.question),
      correctAnswer: decodeHTML(q.correct_answer),
      answers: answers.sort(() => Math.random() - 0.5)
    };
  });
};