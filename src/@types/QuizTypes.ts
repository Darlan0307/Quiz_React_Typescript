export type QuizTypes = {
  qtdHits:number,
  setQtdHits: (value:number)=>void,
  qtdQuestions:number,
  setQtdQuestions:(value:number)=>void,
  setSkill:(value:string)=>void
  skill:string
}

export type objQuestions = {
  pergunta:string,
  alternativas:string[],
  respostaCorreta: number
}



