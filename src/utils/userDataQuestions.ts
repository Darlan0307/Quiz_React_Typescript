import { useState } from "react";
import { objQuestions } from "../@types/QuizTypes";
import { toast } from "react-toastify";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";


export const userDataQuestions = (data:objQuestions[]) => {
  const [indexCurrent,setIndexCurrent] = useState(0)
  const [correctAlternative,setCorrectAlternative] = useState<number | null>(null)
  const [isQuestionVerify,setIsQuestionVerify] = useState(false)
  const {qtdHits,setQtdHits,setQtdQuestions} = useQuiz()

  const navigate = useNavigate()

  const alternativeCorrect = data[indexCurrent].respostaCorreta

  const nextQuestion = () => {
    if(isQuestionVerify){
      setIndexCurrent((prevIndex)=> prevIndex +1 )
      setCorrectAlternative(null)
      setIsQuestionVerify(false)
      window.scrollTo(0,0)
    }else{
      toast.warn('Escolha uma alternativa.')
    }
  }

  const concludeQuiz = () => {
    if(isQuestionVerify){
      setCorrectAlternative(null)
      setIsQuestionVerify(false)
      window.scrollTo(0,0)
      setQtdQuestions(data.length)
      navigate("/congratulations")
    }else{
      toast.warn('Escolha uma alternativa.')
    }
  }

  const verifyAlternative = (index:number) => {
    if(!isQuestionVerify){
      if(index == alternativeCorrect){
        setQtdHits(qtdHits + 1)
  
        if((qtdHits + 1) == 1 ){
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
      if((indexCurrent + 1) != data.length){
        toast.warn('Vá para a próxima pergunta')
        window.scrollTo(0,1000)
      }else if((indexCurrent + 1) == data.length){
        toast.info('Perguntas esgotadas')
        window.scrollTo(0,1000)
      }
    }

    setIsQuestionVerify(true)
  }



  return {
    indexCurrent,
    nextQuestion,
    questionCurrent: data[indexCurrent],
    qtdQuestions:data.length,
    correctAlternative,
    verifyAlternative,
    concludeQuiz
  }
}

