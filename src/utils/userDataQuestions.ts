import { useState } from "react";
import { objQuestions } from "../@types/QuizTypes";
import { toast } from "react-toastify";
import { useQuiz } from "../context/QuizContext";


export const userDataQuestions = (data:objQuestions[]) => {
  const [indexCurrent,setIndexCurrent] = useState(0)
  const [correctAlternative,setCorrectAlternative] = useState<number | null>(null)
  const [isQuestionVerify,setIsQuestionVerify] = useState(false)
  const {qtdHits,setQtdHits} = useQuiz()


  const alternativeCorrect = data[indexCurrent].respostaCorreta

  const nextQuestion = () => {
    setIndexCurrent((prevIndex)=> prevIndex +1 )
    setCorrectAlternative(null)
    setIsQuestionVerify(false)
    window.scrollTo(0,0)
  }

  const verifyAlternative = (index:number) => {
    if(!isQuestionVerify){
      if(index == alternativeCorrect){
        setQtdHits(qtdHits + 1)
  
        if((qtdHits + 1) == 1){
          toast.success("Nossa você é muito bom")  
        }else if((qtdHits + 1) == 2){
          toast.success("parabéns por mais um acerto")
        }else if((qtdHits + 1) >= 3){
          toast.success("Boa continue assim!")
        }
      }else{
        toast.error("Não foi dessa vez ;-;")
      }
  
      setCorrectAlternative(alternativeCorrect)
    }else{
      toast.warn('Vá para a próxima pergunta')
      window.scrollTo(0,1000)
    }

    setIsQuestionVerify(true)
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

