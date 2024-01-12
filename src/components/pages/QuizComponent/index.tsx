import { useQuiz } from "../../../context/QuizContext"
import { TypeDataQuestions } from "../../../@types/QuizTypes"


const allDataQuestions:TypeDataQuestions = {
  "1":"react",
  "2":"nodejs"
}


const QuizComponent = () => {

  const {idQuestions} = useQuiz()

  const dataQuestionsSelected = allDataQuestions[idQuestions]
  

  return (
    <div>{dataQuestionsSelected}</div>
  )
}

export default QuizComponent