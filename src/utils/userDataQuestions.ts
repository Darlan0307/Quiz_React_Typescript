import { useState } from "react";
import { objQuestions } from "../@types/QuizTypes";


export const userDataQuestions = (data:objQuestions[]) => {
  const [indexCurrent,setIndexCurrent] = useState(0)
  const [correctAlternative,setCorrectAlternative] = useState<number | null>(null)


  const alternativeCorrect = data[indexCurrent].respostaCorreta

  const nextQuestion = () => {
    setIndexCurrent((prevIndex)=> prevIndex +1 )
  }

  const verifyAlternative = (index:number) => {
    if(index == alternativeCorrect){
      alert("acertou")
    }else{
      alert("errou")
    }

    setCorrectAlternative(alternativeCorrect)
  }



  return {
    indexCurrent,
    nextQuestion,
    questionCurrent: data[indexCurrent],
    qtdQuestions:data.length,
    correctAlternative,
    verifyAlternative
  }
}

