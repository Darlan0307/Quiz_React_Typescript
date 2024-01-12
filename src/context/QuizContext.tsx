import React, { createContext, useContext, useState } from "react";
import { QuizTypes } from "../@types/QuizTypes";

export const QuizContext = createContext({} as QuizTypes)


type ProviderProps = {
  children: React.ReactNode;
}

export const QuizProvider = ({children}:ProviderProps) => {

  const [idQuestions,setIdQuestions] = useState("")
  const [qtdHits,setQtdHits] = useState(0)

  const handleIdQuestions = (value:string) => {
    setIdQuestions(value)
  }
  

  return (
    <QuizContext.Provider value={{
      idQuestions,
      handleIdQuestions,
      qtdHits,
      setQtdHits
    }}>
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () =>{
  return useContext(QuizContext)
}

