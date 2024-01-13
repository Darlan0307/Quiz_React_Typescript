export type QuizTypes = {
  qtdHits:number,
  setQtdHits: (value:number)=>void,
  qtdQuestions:number,
  setQtdQuestions:(value:number)=>void
}

export type objQuestions = {
  pergunta:string,
  alternativas:string[],
  respostaCorreta: number
}



