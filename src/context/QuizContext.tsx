import React, { createContext, useContext, useState } from "react";
import { QuizTypes } from "../@types/QuizTypes";

export const QuizContext = createContext({} as QuizTypes)


type ProviderProps = {
  children: React.ReactNode;
}

export const QuizProvider = ({children}:ProviderProps) => {

  const [qtdHits,setQtdHits] = useState(0)
  const [qtdQuestions,setQtdQuestions] = useState(0)
  const [skill,setSkill] = useState('')

  return (
    <QuizContext.Provider value={{
      qtdHits,
      setQtdHits,
      qtdQuestions,
      setQtdQuestions,
      setSkill,
      skill
    }}>
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () =>{
  return useContext(QuizContext)
}

