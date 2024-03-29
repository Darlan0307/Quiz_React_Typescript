import LayoutQuiz from '../../../LayoutQuiz'
import '../styles.scss'
import { htmlData } from '../../../../data/htmlData'
import { userDataQuestions } from '../../../../utils/userDataQuestions'
import { useEffect } from 'react'

const QuizHtml = () => {


  const {questionCurrent,indexCurrent,nextQuestion,qtdQuestions,correctAlternative,verifyAlternative,concludeQuiz} = userDataQuestions(htmlData)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  return (
    <LayoutQuiz>
      <main className="container-quiz">
        <h2 className='title-quiz'>HTML</h2>
        <span className='question-current'>{indexCurrent + 1} de {qtdQuestions}</span>
        <p className='question'>{questionCurrent.pergunta}</p>

        <div className='wrap-alternative'>
          {questionCurrent.alternativas.map((alternativa,index)=>(
            <p 
            id={index.toString()}
            className={correctAlternative == index ? 'alternative correct' : 'alternative'} 
            key={index}
            onClick={()=> verifyAlternative(index)}
            >{alternativa}</p>
          ))}
        </div>

        {indexCurrent + 1 == qtdQuestions ? (
          <button 
          className='btn-next-question'
          onClick={()=>concludeQuiz("HTML")}
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

export default QuizHtml