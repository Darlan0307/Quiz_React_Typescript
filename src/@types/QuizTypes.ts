export type QuizTypes = {
  qtdHits:number,
  setQtdHits: (value:number)=>void,
  idQuestions: string,
  handleIdQuestions:(value:string)=>void
}

export type TypeDataQuestions = {
  [key:string]:string
}