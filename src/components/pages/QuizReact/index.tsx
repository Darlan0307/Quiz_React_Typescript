import LayoutQuiz from '../../LayoutQuiz'
import './styles.scss'
import { reactData } from '../../../data/reactData'
import { userDataQuestions } from '../../../utils/userDataQuestions'
import { useState } from 'react'

const QuizReact = () => {

  const [correctAlternative,setCorrectAlternative] = useState<number | null>(null)

  const {questionCurrent,indexCurrent,nextQuestion,qtdQuestions} = userDataQuestions(reactData)

  const alternativeCorrect = questionCurrent.respostaCorreta


  const verifyAlternative = (index:number) => {
    if(index == alternativeCorrect){
      alert("acertou")
    }else{
      alert("errou")
    }

    setCorrectAlternative(alternativeCorrect)
  }

  return (
    <LayoutQuiz>
      <main className="container-quiz">
        <h2 className='title-quiz'>Quiz sobre React</h2>
        <span className='question-current'>{indexCurrent + 1} de {qtdQuestions}</span>
        <p className='question'>{questionCurrent.pergunta}</p>

        <div className='wrap-alternative'>
          {questionCurrent.alternativas.map((alternativa,index)=>(
            <p 
            className={correctAlternative == index ? 'alternative correct' : 'alternative'} 
            key={index}
            onClick={()=> verifyAlternative(index)}
            >{alternativa}</p>
          ))}
        </div>

        {indexCurrent + 1 == qtdQuestions ? (
          <button 
          className='btn-next-question'
          
          >Concluir</button>
        ):(
          <button 
        className='btn-next-question'
        onClick={nextQuestion}
        >Next</button>
        )}
        
      </main>
    </LayoutQuiz>
  )
}

export default QuizReact