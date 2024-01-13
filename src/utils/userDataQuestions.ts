import { useState } from "react";
import { objQuestions } from "../@types/QuizTypes";


export const userDataQuestions = (data:objQuestions[]) => {
  const [indexCurrent,setIndexCurrent] = useState(0)

  const nextQuestion = () => {
    setIndexCurrent((prevIndex)=> prevIndex +1 )
  }


  return {
    indexCurrent,
    nextQuestion,
    questionCurrent: data[indexCurrent],
    qtdQuestions:data.length
  }
}

